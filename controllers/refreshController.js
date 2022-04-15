const Book = require("../models/bookModel");
const fs = require("fs");

const getRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Book.findById(id);
    res.render("frissit", { data });
  } catch (error) {
    console.log(error.message);
  }
};

const postRequest = async (req, res) => {
  try {
    const id = req.body.id;
    const adat = await Book.findById(id);
    const nev = req.body.nev;
    const cim = req.body.cim;
    const ar = req.body.ar;
    let kepcim = "";
    if (req.file === undefined) {
      kepcim = adat.kepcim;
    } else {
      fs.unlinkSync(`public/kepek/${adat.kepcim}`);
      kepcim = req.file.originalname;
    }
    await Book.findByIdAndUpdate(id, { nev, cim, ar, kepcim });
    const data = await Book.findById(id);
    res.render("egyedi", { data });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getRequest, postRequest };
