import express from "express";

const router = express.Router();

const showtheproduct = (req, res) => {
  console.log(req.body);
  res.send("Product added successfully!");
};

router.post("/product", showtheproduct);

export default router;
