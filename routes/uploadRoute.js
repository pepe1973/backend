const { getRequest, postRequest } = require("../controllers/uploadController");
const pictureUpload = require("../utils/multer");

const router = require("express").Router();

router.get("/", getRequest);
router.post("/", pictureUpload.single("kep"), postRequest);

module.exports = router;
