const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const writerData = [
  {
    name: "John",
    email: "a1@a.com",
  },
  {
    name: "Jane",
    email: "b2@b.com",
  },
  {
    name: "Kia",
    email: "k3@k.com",
  },
];

const bookData = [
  {
    title: "Book 1",
    author: writerData[0],
  },
  {
    title: "Book 2",
    author: writerData[0],
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const w of writerData) {
    const writer = await prisma.writer.create({
      data: w,
    });
    console.log(`Created writer with id: ${writer.id}`);
  }

  // for (const b of bookData) {
  //   const book = await prisma.book.create({
  //     data: b,
  //   });
  //   console.log(`Created book with id: ${book.id}`);
  // }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
