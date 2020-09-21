const express = require("express");
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.send("<h1>Hello World</h>");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));