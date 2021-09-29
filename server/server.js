const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Router/userRouter");
const multer = require("multer");
const path = require("path");
const ejs = require("ejs");
// const {authPage} = require('./Controller/userMiddlewares')
const db = require("./DB/index");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.set("view engine", ejs);
app.use(express.static("./public"));
db.on("error", () => {
  console.log("connection error");
});

app.use(cors());

const fileStorageEngine = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + path.extname(file.originalname));
    console.log(file);
  },
});

const upload = multer({ storage: fileStorageEngine });

app.post("/single", upload.single("image"), (req, res) => {
  res.send("single file upload success");
  console.log(req.file);
});

// app.use("/", userRouter);
app.get("/", (req, res) => res.render("index"));

app.listen(3000, () => {
  console.log("server is live on port 8080");
});
