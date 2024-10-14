const { connect } = require("../config/db");
const Note = require("../models/notes");
connect();

const notes = [
  {
    id: 1,
    title: "Work Hard",
    description: "Work on your language skills...",
  },
  {
    id: 2,
    title: "Work Smart",
    description: "Work on your reaching the right person skills...",
  },
];

const insert = async () => {
  try {
    // await Note.deleteMany();
    await Note.insertMany(notes);
    const data = await Note.find({});
    console.log(data)
  } catch (error) {
    console.log(error.message);
  }
};
// insert();

module.exports = { notes };
