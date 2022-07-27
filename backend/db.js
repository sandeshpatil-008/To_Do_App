const mongoose = require("mongoose");

//mongodb://localhost:27017/Addvic
mongoose.connect("mongodb://localhost:27017/ToDoApp");

module.exports = mongoose