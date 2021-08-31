const userRouter = require("express").Router();
const userController = require("../Controller/userController");

userRouter.get("/", userController.getAllEventPost);
userRouter.get("/:_id", userController.getEventById);
userRouter.post("/", userController.PostnewEvent);
userRouter.delete("/:_id", userController.deleteEventPost);
userRouter.put("/:_id", userController.updateEventPost);

userRouter.post("/signup", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});
module.exports = userRouter;
