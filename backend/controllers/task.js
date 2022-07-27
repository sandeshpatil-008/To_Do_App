const taskModel = require("../models/task");

// post/create new data
exports.createTask = async (req, res) => { // usre sathi export karne

    try {
        const task = await new taskModel(req.body).save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ err });
    }
}
//get/read data for all user
exports.getAllTask = async (req, res) => {
    try {
        const task = await taskModel.find();
        res.json(task)
    } catch (err) {
        res.json()
    }
}
// get/read one person data
exports.getTask = async (req, res) => {
    try {
        const task = await taskModel.find({ _id: req.params.userID });
        res.json(task);
    } catch (err) {
        res.json({ err });
    }
}
// delete one person data
exports.deleteTask = (req, res) => {
    taskModel.findOneAndDelete({ _id: req.params.userID }, (err, data) => {
        if (err) {
            res.json({ err });
        } else {
            res.json(data);
        }
    });
}
// put/update one person data
exports.updateTask = (req, res) => {
    taskModel.findOneAndUpdate({ _id: req.params.userID }, req.body, { new: true }, (err, data) => {
        if (err) {
            res.json({ err })
        } else {
            res.json(data);
        }
    })
}