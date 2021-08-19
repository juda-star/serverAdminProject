const userRouter = require("express").Router();
const userController = require("../Controller/userController");

userRouter.get("/", userController.getAllEventPost);
userRouter.get("/:_id", userController.getEventById);
userRouter.post("/", userController.PostnewEvent);
userRouter.delete("/:_id", userController.deleteEventPost);
userRouter.put("/:_id", userController.updateEventPost);

module.exports = userRouter;
