const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Book = require("./book.model");

const booksList = [
  new Book(1, "Book 1", "Author 1"),
  new Book(2, "Book 2", "Author 2"),
  new Book(3, "Book 3", "Author 3"),
];

const getAllBooks = async () => {
  const books = await prisma.book.findMany();
  console.log(books);
  return books;
};

const getBookById = (id) => {
  return booksList.find((book) => book.id === parseInt(id));
};

const createBook = (title, author) => {
  const book = new Book(booksList.length + 1, title, author);
  booksList.push(book);
  return book;
};

const updateBook = (id, title, author) => {
  const book = booksList.find((book) => book.id === parseInt(id));
  book.title = title;
  book.author = author;
  return book;
};

const deleteBook = (id) => {
  const index = booksList.findIndex((book) => book.id === parseInt(id));
  booksList.splice(index, 1);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
