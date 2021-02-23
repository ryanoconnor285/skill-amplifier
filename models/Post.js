const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  images: [
    {
      img: {
        type: Schema.Types.ObjectId,
        ref: "image",
      },
      comments: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "users",
          },
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          concur: [
            {
              user: {
                type: Schema.Types.ObjectId,
                ref: "users",
              },
            },
          ],
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
