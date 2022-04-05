const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/kepek");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const pictureUpload = multer({ storage: fileStorageEngine });

module.exports = pictureUpload;
