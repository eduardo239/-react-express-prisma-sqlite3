const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllWriters = async () => {
  const writers = await prisma.writer.findMany();
  return { data: writers, error: false, status: 200 };
};

const getWriterById = async (id) => {
  const writer = await prisma.writer.findUnique({
    where: { id: parseInt(id) },
  });
  return { data: writer, error: false, status: 200 };
};

const createWriter = async (email, name) => {
  try {
    const writer = await prisma.writer.create({
      data: {
        email,
        name,
      },
    });
    return { data: writer, error: false, status: 200 };
  } catch (error) {
    if (error.code === "P2002") {
      return { data: null, error: "Email already exists", status: 400 };
    } else {
      return { data: null, error: error.message, status: 500 };
    }
  }
};

const updateWriter = async (id, email, name) => {
  try {
    const writer = await prisma.writer.update({
      where: { id: parseInt(id) },
      data: {
        email,
        name,
      },
    });

    return { data: writer, error: false, status: 200 };
  } catch (error) {
    if (error.code === "P2002") {
      return {
        data: null,
        error: "Email already exists",
        status: 400,
      };
    } else {
      return { data: null, error: error.message, status: 500 };
    }
  }
};

const deleteWriter = async (id) => {
  try {
    const writer = await prisma.writer.delete({
      where: { id: parseInt(id) },
    });
    return { data: writer, error: false, status: 200 };
  } catch (error) {
    if (error.code === "P2025") {
      return {
        data: null,
        error: "Record to delete does not exist",
        status: 404,
      };
    }
  }
};

module.exports = {
  getAllWriters,
  getWriterById,
  createWriter,
  updateWriter,
  deleteWriter,
};
