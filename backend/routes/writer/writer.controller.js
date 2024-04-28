const { Router } = require("express");
const router = Router();

const {
  getAllWriters,
  getWriterById,
  createWriter,
  updateWriter,
  deleteWriter,
} = require("./writer.service");

router.get("/", async (req, res, next) => {
  res.json(await getAllWriters());
});

router.get("/:id", async (req, res, next) => {
  res.json(await getWriterById(req.params.id));
});

router.post("/", async (req, res, next) => {
  res.json(await createWriter(req.body.email, req.body.name));
});

router.put("/:id", async (req, res, next) => {
  res.json(await updateWriter(req.params.id, req.body.email, req.body.name));
});

router.delete("/:id", async (req, res, next) => {
  res.json(await deleteWriter(req.params.id));
});

module.exports = router;
