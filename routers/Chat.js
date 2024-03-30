const express = require("express");
const chatcontrolers = require("../controllers/chat.contoler.js");
const router = express.Router();

router.get("/", chatcontrolers.chatGet);

router.post("/", chatcontrolers.chatpost);

module.exports = router;
