const Book = require("../models/bookModel");
const fs = require("fs");

const getRequest = async (req, res) => {
  try {
    const data = await Book.find();
    res.render("index", { data });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteRequest = async (req, res) => {
  const id = req.params.id;
  const kepcim = req.params.kepcim;
  try {
    await Book.findByIdAndDelete(id);
    fs.unlinkSync(`public/kepek/${kepcim}`);
    res.render("torles");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getRequest, deleteRequest };
