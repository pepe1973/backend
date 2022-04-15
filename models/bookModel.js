const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
      required: [true, "A könyv szerzőjének a megadása kötelező!"],
    },
    cim: {
      type: String,
      required: [true, "A könyv címének a megadása kötelező!"],
    },
    ar: {
      type: String,
      required: [true, "A könyv árának a megadása kötelező!"],
    },
    kepcim: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
