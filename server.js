const mongoose = require("mongoose");
const express = require("express");
const compression = require("compression");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});