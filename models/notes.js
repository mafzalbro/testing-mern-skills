const { default: mongoose } = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      default: "title here",
      unique: true,
    },
    description: {
      type: String,
      default: "description here",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.connection.name || mongoose.model("Note", notesSchema);
