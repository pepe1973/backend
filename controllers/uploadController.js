const Book = require("../models/bookModel");

const getRequest = (req, res) => {
  res.render("feltolt");
};

const postRequest = async (req, res) => {
  const nev = req.body.nev;
  const cim = req.body.cim;
  const ar = req.body.ar;
  const kepcim = req.file.originalname;
  try {
    const newBook = new Book({ nev, cim, ar, kepcim });
    await newBook.save();
    const data = await Book.find();
    res.render("index", { data });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getRequest, postRequest };
