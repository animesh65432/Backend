import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello to Node js");
});

app.listen(3000, () => {
  console.log("You server at listening at the 3000");
});
