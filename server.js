require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./utils/db");

// Middleware-k
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route-ok
app.use("/", require("./routes/mainRoute"));
app.use("/upload", require("./routes/uploadRoute"));

// Adatbázis
connection();

app.listen(5000, () => {
  console.log("A szerver fut: http://localhost:5000");
});
