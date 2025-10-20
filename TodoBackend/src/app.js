const express = require('express')
const app = express()
const cors = require('cors')

const Todo = require('../models/schema.js')
const {connectDB} = require('../utils/database.js')


app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/", async (req,res) => {
    try {
        const task = req.body
        const pushTask = await Todo.create(task)
        res.status(200).send(pushTask)
    } catch (error) {
        res.status(500).send(error) 
    }
})

app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const deleteTask = await Todo.findOneAndDelete({ _id: id });
        console.log(deleteTask) 
        res.status(202).send(deleteTask)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.patch("/:id", async (req, res) => {
  try {
    const newtask = req.body;
    const id = req.params.id;
    const updateTask = await Todo.findByIdAndUpdate(id, newtask, {new : true});
    res.send(updateTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

connectDB().then(()=>{
    app.listen(5000, ()=>{
        console.log('Connected to the Server')
    });
});