const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    
  },
  { timestamps: true }
);

const Event = mongoose.model("event", eventSchema);
module.exports = Event;