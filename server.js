const mongoose = require("mongoose");
const express = require("express");
const compression = require("compression");
const logger = require("morgan");

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
});