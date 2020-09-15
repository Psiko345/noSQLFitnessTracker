const mongoose = require("mongoose");
const express = require("express");
const compression = require("compression");
const logger = require("morgan");

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

const app = express();
app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(express.static("public"));

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});