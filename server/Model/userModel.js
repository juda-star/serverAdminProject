const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    creatorEvent: [{ type: Schema.Types.ObjectId, ref: "staff" }],
  },
  { timestamps: true }
);

const Event = mongoose.model("event", eventSchema);
module.exports = Event;
