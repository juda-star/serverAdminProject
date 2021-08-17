const mongoose = require("mongoose");

const Schema = mongoose.Schema;
////////////////no reqired////////////////
const userSchema = new Schema({

});
module.exports = mongoose.model("user", userSchema);
