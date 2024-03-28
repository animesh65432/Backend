import express from "express";

const add_productrouter = (req, res) => {
  return res.send(
    "<html><form action='/product' method='post'><input name='username' placeholder='please put your name here'></input><button>Add</button></form></html>"
  );
};

let router = express.Router();

router.get("/add_product", add_productrouter);

export default router;
