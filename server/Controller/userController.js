const userModel = require("../Model/userModel");
const { ObjectId } = require("mongodb");

async function getAllEventPost(req, res) {
  try {
    await userModel.find({}, (error, result) => {
      if (error) throw error;
      res
        .status(200)
        .res.json({ massage: "Get Event Post success", data: result });
    });
  } catch (err) {
    res.status(500).res.json({ massage: "Get Event Post field", error: err });
  }
}

async function getEventById(req, res) {
  try {
    await userModel.findById(
      { _id: ObjectId(req.body._id) },
      (error, result) => {
        if (error) throw error;
        res.json({ massage: "succses", data: result });
      }
    );
  } catch (error) {
    res.json({ massage: "DataBase Problem", error: error });
  }
}

async function PostnewEvent(req, res) {
  try {
    await userModel.insertMany(req.body, (error, result) => {
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
    await studentModel.findOneAndDelete(
      { _id: ObjectId(req.body._id) },
      (error, result) => {
        if (error) throw error;
        res
          .status(200)
          .res.json({ massage: "Deleted Event Success", data: result });
      }
    );
  } catch (error) {
    res.status(500).res.json({ massage: "Deleted Event field", error: error });
  }
}

async function updateEventPost(req, res) {
  try {
    studentModel.findByIdAndUpdate(
      { _id: ObjectId(req.body._id) },
      { $set: req.body.student },
      (error, result) => {
        if (error) throw error;
        res
          .status(200)
          .res.json({ massage: "Update Event Success", data: result });
      }
    );
  } catch (error) {
    res.status(500).res.json({ massage: "Update Event field", error: error });
  }
}
module.exports = {
  getAllEventPost,
  getEventById,
  PostnewEvent,
  deleteEventPost,
  updateEventPost,
};
