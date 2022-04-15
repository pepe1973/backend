const Book = require("../models/bookModel");
const fs = require("fs");

const getRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Book.findById(id);
    res.render("egyedi", { data });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getRequest;
