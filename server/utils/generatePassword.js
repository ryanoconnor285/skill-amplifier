const animals = require("./animals");
const adjectives = require("./adjectives");

const generatePassword = () =>
  adjectives[Math.floor(Math.random() * 1078) + 1] +
  "-" +
  animals[Math.floor(Math.random() * 224) + 1];

module.exports = generatePassword;
