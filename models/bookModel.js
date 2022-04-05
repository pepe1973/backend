const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
      required: true,
    },
    kepcim: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
