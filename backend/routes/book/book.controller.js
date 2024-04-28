const { Router } = require("express");
const router = Router();

const {
  createBook,
  deleteBook,
  getBookById,
  getAllBooks,
  updateBook,
} = require("./book.service");

router.get("/", (req, res, next) => {
  res.send(getAllBooks());
});

router.get("/:id", (req, res, next) => {
  res.send(getBookById(req.params.id));
});

router.post("/", (req, res, next) => {
  res.send(createBook(req.body.title, req.body.author));
});

router.put("/:id", (req, res, next) => {
  res.send(updateBook(req.params.id, req.body.title, req.body.author));
});

router.delete("/:id", (req, res, next) => {
  res.send(deleteBook(req.params.id));
});

module.exports = router;
