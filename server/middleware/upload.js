const multer = require("multer");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const { saveFileToBucket } = require("./s3");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file && file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadFiles = upload.array("images", 5);

const uploadImages = (req, res, next) => {
  try {
    uploadFiles(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          return res.send("Too many files to upload.");
        }
      } else if (err) {
        return res.send(err);
      }

      next();
    });
  } catch (err) {
    return res.status(400).json({
      errors: [
        {
          msg: "You must upload at least 1 image",
        },
      ],
    });
  }
};

const resizeImages = async (req, res, next) => {
  if (!req.files) return next();

  req.body.images = [];
  await Promise.all(
    req.files.map(async (file) => {
      const imageId = `${uuidv4()}-${Date.now()}`;
      const filePath = `uploads/${imageId}.jpeg`;
      await sharp(file.buffer)
        .resize(640, 320)
        .toFormat("jpeg")
        .jpeg({ quality: 100 })
        .toFile(filePath);
      await saveFileToBucket(filePath, imageId);
      req.body.images.push(imageId);
    })
  );

  next();
};

const getResult = async (req, res) => {
  if (req.body.images === undefined || req.body.images.length <= 0) {
    return res.status(400).json({
      errors: [
        {
          msg: "You must upload at least 1 image",
        },
      ],
    });
  }

  return res.send(req.body.images);
};

module.exports = {
  uploadImages: uploadImages,
  resizeImages: resizeImages,
  getResult: getResult,
};
