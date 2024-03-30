const express = require("express");
const path = require("path");
const cors = require("cors");
const userRouter = require("./routers/Userrouter.js");
const chatRouter = require("./routers/Chat.js");
const Sucessrouter = require("./routers/Sucess.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/users", userRouter);
app.use("/", chatRouter);
app.use("/Sucessrouter", Sucessrouter);
app.use("/Contact", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "Contactus.html"));
});
app.get("/AfterSuccess", (req, res) => {
  console.log("User sucesfully loged in");
  res.status(202).sendFile(path.join(__dirname, "views", "Success.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Your server is listening at port 3000");
});
