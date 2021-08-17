const userModel = require("../Model/userModel");
/////////////////getAll////////////////////////////////
async function getAllUser(req, res) {
  try {
    await userModel.find({}, (error, result) => {
      if (error) throw error;
      res.json({ massage: "success", data: result });
    });
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}
/////////////////////////////add////////////////////////////////
async function createNewUser(req, res) {
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
module.exports = {
    getAllUser,
  createNewUser,
};