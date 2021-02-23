const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const uploadController = require("./../controllers/upload");

// @route POST api/uploads
// @desc Upload images to a folder on the server
// @access Private
router.post(
  "/",
  auth,
  uploadController.uploadImages,
  uploadController.resizeImages,
  uploadController.getResult
);

module.exports = router;
