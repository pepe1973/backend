const Book = require("../models/bookModel");

const getRequest = (req, res) => {
  res.render("feltolt");
};

const postRequest = async (req, res) => {
  const nev = req.body.nev;
  const kepcim = req.file.originalname;
  try {
    const newBook = new Book({ nev, kepcim });
    await newBook.save();
    res.render("feltolt");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getRequest, postRequest };
