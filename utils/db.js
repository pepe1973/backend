const mongoose = require("mongoose");

const connection = () => {
  const URI = process.env.MONGO_URI;
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Sikeres adatbázis csatlakozás!");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = connection;
