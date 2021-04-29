require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

// Create new instance of S3 bucket
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// Controller function for sending images to the AWS s3 bucket
const saveFileToBucket = (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
};

const getFileStream = (fileKey) => {
  const downloadParams = {
    Bucket: bucketName,
    Key: fileKey,
  };
  return s3.getObject(downloadParams).createReadStream();
};

module.exports = {
  saveFileToBucket: saveFileToBucket,
  getFileStream: getFileStream,
};
