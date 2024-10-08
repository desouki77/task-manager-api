const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

/* CRUD Operations */ // for RESTfull API
/* 
POST => Create
GET => Read
PUT => Update
DELETE => Delete
*/

// POST /tasks - Create a new task
router.post('/', async (req,res) =>{
    try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

});

// GET /tasks - Retrieve all tasks
router.get('/', async (req,res) => {
    try {
    const task = await Task.find();
    res.status(200).json(task)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// GET /tasks/:id - Retrieve a task by ID
router.get('/:id', async (req,res)=>{
    try {
    const task = await Task.findById(req.params.id);
    if(!task) return res.status(404).json({message: 'Task not found'});
    res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// PUT /tasks/:id - Update a task by ID
router.put('/:id', async(req,res)=>{
    try{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: ture});
    if(!task) return res.status(404).json({message: "Task not found"});
    res.status(200).json(task);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// DELETE /tasks/:id - Delete a task by ID
router.delete('/:id', async (req,res)=>{
    try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({message:"Task not found"});
    res.status(200).json({message:"Task deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;

































