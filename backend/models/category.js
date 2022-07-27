const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName: String,

});

module.exports = mongoose.model("category", categorySchema);