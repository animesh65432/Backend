import express from "express";
import bodyparser from "body-parser";
import AddRouter from "./routers/Addrouter.js";
import ShowRouter from "./routers/showproduct.js";
let app = express();
app.use(bodyparser.urlencoded({ extended: false }));

app.use(AddRouter);
app.use(ShowRouter);
app.use((req, res, next) => {
  return res.status(404).send("<h1>Page is Not Found</h1>");
});
app.listen(3000, () => {
  console.log("Your server is listening at port 3000");
});
