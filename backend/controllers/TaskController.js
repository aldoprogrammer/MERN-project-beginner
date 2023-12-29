const TaskModels = require("../models/TaskModels")

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModels.find()
    res.send(tasks)   
}

module.exports.saveTask = (req, res) => {
    const { task } = req.body;

    TaskModels.create({task})
    .then((data) => {
        console.log("Saved Successfuly...");
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err)
        res.send({error: err, msg: "Something went wrong"})
    })
}

module.exports.updateTask = (req, res) => {
    const {id} = req.params;
    const { task } = req.body;

    TaskModels.findByIdAndUpdate(id, {task})
    .then(() => res.send("Updated Succesfully"))
    .catch((err) => {
        console.log(err)
        res.send({error: err, msg: "Something went wrong"})
    })
}

module.exports.deleteTask = (req, res) => {
    const {id} = req.params;

    TaskModels.findByIdAndDelete(id)
    .then(() => res.send("Deleted Succesfully"))
    .catch((err) => {
        console.log(err)
        res.send({error: err, msg: "Something went wrong"})
    })
}