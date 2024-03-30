const express = require("express");
const Router = express.Router();
const sucessfouter = require("../controllers/sucess.controler.js");

Router.post("/", sucessfouter);

module.exports = Router;
