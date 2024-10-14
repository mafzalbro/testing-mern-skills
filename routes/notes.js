const { getNotes, getOne, createNote, deleteOne } = require("../controllers/notes");
const express = require("express");

const router = express.Router();

router.get("/create", createNote);

router.delete("/:id", deleteOne);

router.get("/", getNotes);

router.get("/:id", getOne);


module.exports = router;
