const mongoose = require('mongoose')


const taskSchema = mongoose.Schema({

    name: {
        type : String,
        required : true
    },
    isCompleted : {
        type: Boolean, 
        default : false
    }


})


const Task = mongoose.model("Task" , taskSchema)


module.exports = Task;