const express = require("express");
const router = express.Router();
const fs = require("fs");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Post = require("../models/Post");

// @route POST api/posts
// @desc Upload a post
// @ access Private
router.post(
  "/",
  [
    check("descShort", "descShort is required.").not().isEmpty(),
    check("descLong", "descLong is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { descShort, descLong } = req.body;

    const post = new Post();
    post.descShort = descShort;
    post.descLong = descLong;
    // post.img.data = fs.readFileSync(req.files.userPhoto.path);
    // post.img.contentType = `image/png`;
    await post.save();
    console.log("Post Route", req.body);

    res.json(post);
  }
);

module.exports = router;
