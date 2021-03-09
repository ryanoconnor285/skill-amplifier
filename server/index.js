require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false, limit: "50mb" }));

// Define Routes
app.use("/api/users", require("./api/users"));
app.use("/api/posts", require("./api/posts"));
app.use("/api/images", require("./api/images"));
app.use("/api/auth", require("./api/auth"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
