const mongoose = require("mongoose");

// create data schema (format) for db
const taskSchema = new mongoose.Schema({
    taskName: String,
    cateName: String,
    date: Date

});
module.exports = mongoose.model("task", taskSchema);// controller madhe je function banel te module la follow karen
