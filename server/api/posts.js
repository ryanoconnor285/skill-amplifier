require("dotenv").config();
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

//  Models
const User = require("../models/User");
const Post = require("../models/Post");

// @route POST api/posts
// @desc Upload a post with a single image
// @access Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const newPost = new Post({
      user: req.user.id,
      images: req.body.images,
    });

    const post = await newPost.save();

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/posts
// @desc Get all posts
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/posts/:id
// @desc Get a post with an id
// @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: "Post not found" });

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId")
      return res.status(404).json({ msg: "Post not found" });
    res.status(500).send("Server Error");
  }
});

// @route DELETE api/posts/:id
// @desc Delete a post with ID
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: "Post not found" });

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post Removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId")
      return res.status(404).json({ msg: "Post not found" });
    res.status(500).send("Server Error");
  }
});

// @route PUT api/posts/concur/:id
// @desc Concur with a post
// @access Private

router.put("/concur/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.user.toString() === req.user.id) {
      return res
        .status(400)
        .json({ msg: "You can not concur with your own post." });
    }
    // Check if post has already been concurred by this user
    if (
      post.concur.filter((x) => x.user.toString() === req.user.id).length > 0
    ) {
      return res
        .status(400)
        .json({ msg: "You have already concurred with this post." });
    }

    post.concur.push({ user: req.user.id });

    await post.save();

    res.json(post.concur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT api/posts/unconcur/:id
// @desc Concur with a post
// @access Private

router.put("/unconcur/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.user.toString() === req.user.id) {
      return res
        .status(400)
        .json({ msg: "You can not concur with your own post." });
    }
    // Check if post has already been concurred by this user
    if (
      post.concur.filter((x) => x.user.toString() === req.user.id).length > 0
    ) {
      return res
        .status(400)
        .json({ msg: "You have already concurred with this post." });
    }

    post.concur.push({ user: req.user.id });

    await post.save();

    res.json(post.concur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
