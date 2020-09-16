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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});