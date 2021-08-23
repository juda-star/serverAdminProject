const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Router/userRouter");

// const {authPage} = require('./Controller/userMiddlewares')
const db = require("./DB/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.on("error", () => {
  console.log("connection error");
});
app.use(cors());

app.use("/users", userRouter);

app.listen(8080, () => {
  console.log("server is live on port 8080");
});
