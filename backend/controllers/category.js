const categoryModel = require("../models/category");

// post/create new data
exports.createCategory = async (req, res) => { // usre sathi export karne

    try {
        const category = await new categoryModel(req.body).save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ err });
    }
}
//get/read data for all user
exports.getAllCategory = async (req, res) => {
    try {
        const category = await categoryModel.find();
        res.json(category)
    } catch (err) {
        res.json()
    }
}
// get/read one person data
exports.getCategory = async (req, res) => {
    try {
        const category = await categoryModel.find({ _id: req.params.userID });
        res.json(category);
    } catch (err) {
        res.json({ err });
    }
}
// delete one person data
exports.deleteCategory = (req, res) => {
    categoryModel.findOneAndDelete({ _id: req.params.userID }, (err, data) => {
        if (err) {
            res.json({ err });
        } else {
            res.json(data);
        }
    });
}
// put/update one person data
exports.updateCategory = (req, res) => {
    categoryModel.findOneAndUpdate({ _id: req.params.userID }, req.body, { new: true }, (err, data) => {
        if (err) {
            res.json({ err })
        } else {
            res.json(data);
        }
    })
}