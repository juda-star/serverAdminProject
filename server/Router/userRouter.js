const studentRouter = require("express").Router();
const userCotroller = require("../Controller/userController");

userCotroller.get("/", userController.getAllStudent);
userCotroller.get("/:_id", userController.getStudentById);
userCotroller.post("/", userController.createNewStudent);
userCotroller.delete("/:_id", userController.deleteStudent);
userCotroller.put("/:_id", userController.updateStudent);

module.exports = studentRouter;
