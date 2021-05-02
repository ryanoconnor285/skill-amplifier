const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  uploadImages,
  resizeImages,
  getResult,
} = require("../middleware/upload");
const { getFileStream } = require("../middleware/s3");

// @route POST api/images/:imageId
// @desc Get image from bucket
// @access Private
router.get("/:imageId", auth, getFileStream);

// @route POST api/images
// @desc Upload images to a folder on the server
// @access Private
router.post("/", auth, uploadImages, resizeImages, getResult);

module.exports = router;
