// import models here
// const { notes } = require("../lib/notes");
const Note = require("../models/notes");

const createNote = async (req, res) => {
  try {
    let { id, title, description } = req.query;

    id = parseInt(id);

    // console.log({ id, title, description });

    if (!id || !title || !description) {
      return res
        .status(400)
        .json({ message: "id or title or description is empty" });
    }

    const existedNote = Note.find({ title });
    if (!existedNote) {
      return res.status(400).json({ message: "This note already exists" });
    }

    const note = new Note({
      id,
      title,
      description,
    });

    await note.save();

    res.redirect("http://localhost:3000");
    // return res.status(201).json({ message: "Note created successfully", note });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
  const { limit = 5, page = 1 } = req.query;
  try {
    const notes = await Note.find({})
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.find({ id });
    if (note.length > 0) return res.status(200).json(note);
    else
    res.status(404).send({ message: "note with not exist with id : " + id });
} catch (error) {
  return res.status(500).json({ message: error.message });
}
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.find({ id });
    if (!note) {
      return res
      .status(404)
      .send({ message: "note with not exist with id : " + id });
    }
    console.log(note);
    await Note.deleteOne({ _id: note[0]._id });
    return res
    .status(200)
    .json({ message: "note deleted successfully", note });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNote,
  getNotes,
  getOne,
  deleteOne,
};
