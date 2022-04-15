const getRequest = require("../controllers/uniqueController");
const router = require("express").Router();

router.get("/:id", getRequest);

module.exports = router;
