const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

//  Models
const User = require("../models/User");
const Post = require("../models/Post");

//  File Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// @route POST api/posts
// @desc Upload a post
// @ access Private
router.post("/", auth, upload.single("tracingImage"), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const user = (await User.findById(req.user.id)).isSelected("-password");

    const newPost = new Post({
      title: req.body.title,
      desc: req.body.desc,
      user: req.user.id,
      img: {
        data: fs.readFileSync(req.file.path),
        contentType: "image/jpeg",
      },
    });

    const post = await newPost.save();

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
