const Task = require('../models/task')

exports.index = async (req, res) => {
    Task.find(async (err, tasks) => {
        if(err){
            console.error(err)
            return res.status(500).json({ message: "An error occured, unable to find task.", error: err.message })
        }
        return res.json(tasks);
    })
}

exports.show = async (req, res) => {

    Task.findById(req.params.task, async (err, task) => {
        if(err){
            return res.status(500).json({ message: "An error occured, unable to find task.", error: err.message })
        }
        return res.json(task);
    })
}