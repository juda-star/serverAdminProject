const eventModel = require("../Model/userModel");
const { ObjectId } = require("mongodb");

async function getAllEventPost(req, res) {
  try {
    await eventModel.find({}, (error, result) => {
      if (error) throw error;
      res.status(200).json({ massage: "Get Event Post success", data: result });
    });
  } catch (err) {
    res.status(500).res.json({ massage: "Get Event Post field", error: err });
  }
}

async function getEventById(req, res) {
  try {
    await eventModel.findById(
      { _id: ObjectId(req.body._id) },
      (error, result) => {
        if (error) throw error;
        res
          .status(200)
          .res.json({ massage: "get event by id succses", data: result });
      }
    );
  } catch (error) {
    res
      .status(500)
      .res.json({ massage: "get event by id field  ", error: error });
  }
}

async function PostnewEvent(req, res) {
  try {
    await eventModel.insertMany(req.body, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        massage: "Post Added successfully, success",
        data: result,
      });
    });
  } catch (err) {
    res.status(500).res.json({ massage: "Post Added Field ", error: err });
  }
}

async function deleteEventPost(req, res) {
  try {
    await eventModel.findOneAndDelete(
      { _id: ObjectId(req.body._id) },
      (error, result) => {
        if (error) throw error;
        res
          .status(200)
          .json({ massage: "Deleted Event Success", data: result });
      }
    );
  } catch (error) {
    res.status(500).json({ massage: "Deleted Event field", error: error });
  }
}

async function updateEventPost(req, res) {
  try {
    eventModel.findByIdAndUpdate(
      { _id: ObjectId(req.params._id) },
      { $set: req.body },
      (error, result) => {
        if (error) throw error;
        res.status(200).json({ massage: "Update Event Success", data: result });
      }
    );
  } catch (error) {
    res.status(500).json({ massage: "Update Event field", error: error });
  }
}
module.exports = {
  getAllEventPost,
  getEventById,
  PostnewEvent,
  deleteEventPost,
  updateEventPost,
};

// userRouter.get("/", userController.getAllEventPost);
// userRouter.get("/:_id", userController.getEventById);
// userRouter.post("/", userController.PostnewEvent);
// userRouter.delete("/:_id", userController.deleteEventPost);
// userRouter.put("/:_id", userController.updateEventPost);
