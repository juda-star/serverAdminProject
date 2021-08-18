const userRouter = require("express").Router();
const userController = require("../Controller/userController");

userRouter.get("/", userController.adminGetAllUser);
userRouter.get("/:_id", userController.adminGetStudentById);
userRouter.post("/", userController.adminCreateNewUser);
userRouter.delete("/:_id", userController.adminDeleteStudent);
userRouter.put("/:_id", userController.adminUpdateStudent);

module.exports = userRouter;
