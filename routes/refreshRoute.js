const { getRequest, postRequest } = require("../controllers/refreshController");
const pictureUpload = require("../utils/multer");

const router = require("express").Router();

router.get("/:id", getRequest);
router.post("/", pictureUpload.single("kep"), postRequest);

module.exports = router;
