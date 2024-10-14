const { connect } = require("./config/db");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "./public")));

const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

connect();

const notesRoutes = require("./routes/notes");

console.log("Just testintg...");

app.use("/api/notes", notesRoutes);

app.use("/*", (req, res) => {
  res.send("For All");
});

app.listen(PORT, () => {
  console.log("Running at http://localhost:" + PORT);
});

module.exports = app;
