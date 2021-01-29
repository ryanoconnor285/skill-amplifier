const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  descShort: {
    type: String,
    required: true,
    unique: false,
  },
  descLong: {
    type: String,
    required: true,
    unique: false,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
