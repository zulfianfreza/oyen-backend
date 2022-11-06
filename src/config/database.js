const mongoose = require("mongoose");

const { mongodbUrl } = require("./config");

mongoose.connect(mongodbUrl);

const db = mongoose.connection;

module.exports = db;
