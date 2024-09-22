const Task = require('../Models/Tasks.js');

// Task Controller Functions

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ message: "Must send name" });
    }
};

const getSingleTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });

        if (task) {
            return res.status(200).json({ task });
        } else {
            return res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    // try {
    //     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //         new: true,
    //         runValidators: true,
    //     });

    //     if (!task) {
    //         return res.status(404).json({ message: "Task not found" });
    //     }

    //     res.status(200).json({ task });
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }

    try {

        const task = await Task.findByIdAndUpdate(req.params.id , req.body,{
            new : true,
            runValidators : true

        })

        if(!task)
        {
            res.status(404).json({message: "Task not found"})
        }

        res.status(200).json({task})
        
    } catch (error) {

        res.status(500).json({ message: error.message });
        
    }


};

const deleteTask = async (req, res) => {
    // try {
    //     const task = await Task.findByIdAndDelete(req.params.id);

    //     if (!task) {
    //         return res.status(404).json({ message: "Task not found" });
    //     }

    //     res.status(200).json({ message: "Task deleted successfully" });
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }


    try {

        const task = Task.findByIdAndDelete(req.params.id);

        if(!task)
        {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({message : "Task deleted successfully."})
        
    } catch (error) {
        
    }
};

// Exporting the functions for use in your routes
module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
};
