const Book = require("../models/bookModel");

const getRequest = async (req, res) => {
  try {
    const data = await Book.find();
    res.render("index", { data });
  } catch (error) {
    console.log(error.message);
  }
};

const postRequest = (req, res) => {
  res.send("Ez egy post lekérdezés.");
};

module.exports = { getRequest, postRequest };
