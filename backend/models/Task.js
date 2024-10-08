const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Task title is required'],
    },
    description: {
        type: String,
        required: [true, 'Task description is required'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
        required: false,
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;