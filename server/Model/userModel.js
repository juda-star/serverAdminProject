const mongoose = require("mongoose");

const Schema = mongoose.Schema;
////////////////no reqired////////////////
const eventSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
    },

    massage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("eventAdmin", eventSchema);
