const express = require("express");
const mongoose = require("mongoose");
const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(formidable());
app.use(cors());

const userRoutes = require("./routes/user");
app.use(userRoutes);

mongoose.connect("mongodb://localhost:27017/students-app", {});

app.all("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
});

app.listen(3001, (req, res) => {
    console.log("server started");
});
