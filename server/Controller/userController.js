const userModel = require("../Model/userModel");
const { ObjectId } = require("mongodb");

/////////////////getAll////////////////////////////////
async function adminGetAllUser(req, res) {
  try {
    await userModel.find({}, (error, result) => {
      if (error) throw error;
      res.json({ massage: "success", data: result });
    });
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}
/////////////////////////////get by id ///////////////////////////
async function adminGetStudentById(req, res) {
  try {
    await userModel.findById(
      { _id: ObjectId(req.params._id) },
      (error, result) => {
        if (error) throw error;
        res.json({ massage: "succses", data: result });
      }
    );
  } catch (error) {
    res.json({ massage: "DataBase Problem", error: error });
  }
}
/////////////////////////////add////////////////////////////////
async function adminCreateNewUser(req, res) {
  const { errors, isValid } = userValidate(req.body.user);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    await userModel.insertMany(req.body.user, (error, result) => {
      if (error) throw error;
      res.json({
        massage: "success, added successfully",
        data: req.body.users,
      });
    });
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}

///////////////////////delete//////////////////////////////

async function adminDeleteStudent(req, res) {
  try {
    await studentModel.findOneAndDelete(
      { _id: ObjectId(req.params._id) },
      (error, result) => {
        if (error) throw error;
        res.json({ massage: "Success", data: result });
      }
    );
  } catch (error) {
    res.json({ massage: "DataBase Problem", error: error });
  }
}
////////////////////update///////////////////////////////
async function adnimUpdateStudent(req, res) {
  try {
    studentModel.findByIdAndUpdate(
      { _id: ObjectId(req.params._id) },
      { $set: req.body.student },
      (error, result) => {
        if (error) throw error;
        res.json({ massage: "Success", data: result });
      }
    );
  } catch (error) {
    res.json({ massage: "DataBase Problem", error: error });
  }
}
module.exports = {
  adminGetAllUser,
  adminCreateNewUser,
  adminGetStudentById,
  adminDeleteStudent,
  adnimUpdateStudent,
};
