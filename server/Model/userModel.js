const mongoose = require("mongoose");

const Schema = mongoose.Schema;
////////////////no reqired////////////////
const eventAdminSchema = new Schema({
  eventName: {
    type: String,
    require: true,
  },
  Date: {
    type: Date,
    require: true,
  },
  massage: {
    type: String,
  }
});
module.exports = mongoose.model("eventAdmin", eventAdminSchema);
