import express from "express";
import userRouter from "./routers/Userrouter.js";
import chatRouter from "./routers/Chat.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/", chatRouter);

app.use((req, res, next) => {
  return res.status(404).send("<h1>Page is Not Found</h1>");
});

app.listen(3000, () => {
  console.log("Your server is listening at port 3000");
});
