const { getRequest, postRequest } = require("../controllers/mainController");

const router = require("express").Router();

router.get("/", getRequest);
router.post("/", postRequest);

module.exports = router;
