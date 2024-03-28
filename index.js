import express from "express";
import bodyparser from "body-parser";

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

const add_productrouter = (req, res) => {
  return res.send(
    "<html><form action='/product' method='post'><input name='username' placeholder='please put your name here'></input><button>Add</button></form></html>"
  );
};

app.get("/add_product", add_productrouter);

const showtheproduct = (req, res) => {
  console.log(req.body);
  res.send("Product added successfully!");
};

app.post("/product", showtheproduct);

app.listen(3000, () => {
  console.log("Your server is listening at port 3000");
});
