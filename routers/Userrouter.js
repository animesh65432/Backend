const express = require("express");
const router = express.Router();
const usercontrole = require("../controllers/user.controloer.js");

router.get("/", usercontrole);

module.exports = router;
