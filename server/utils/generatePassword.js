const fs = require('fs');
const animals = require('./animals');
const adjectives = require('./adjectives');

const passwords = [];
console.log(animals.length)
console.log(adjectives.length)

for (let i = 0; i < 250; i++) {
  passwords.push(adjectives[Math.floor(Math.random() * 1078) + 1] + "-" + animals[Math.floor(Math.random() * 224) + 1]);
}

var file = fs.createWriteStream('./utils/password.txt');
file.on('error', function(err) { /* error handling */ });
passwords.forEach(function(v) { file.write(v + '\n'); });
file.end();
console.log(passwords);