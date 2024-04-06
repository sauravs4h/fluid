const { Taskmodel } = require("../models/Task.model");

const newTask = async (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;

  try {
    if (
      typeof title !== "string" &&
      typeof description !== "string" &&
      typeof priority !== "string" &&
      typeof status !== "string"
    ) {
      return res.status(400).json({ error: "Enter valid details" });
    }

    const task = new Taskmodel({
      title,
      description,
      dueDate,
      priority,
      status,
    });
    await task.save();

    res.status(201).json({ message: "task is created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getting all task

const allTasks = async (req, res) => {
  try {
    let tasks = await Taskmodel.find();
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get task by id

const getOneTask = async (req, res) => {
  const { taskid } = req.params;

  try {
    let task = await Taskmodel.findOne({ _id: taskid });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update the task

const updateTask = async (req, res) => {
  const { taskId, status } = req.body;

  try {
    let task = await Taskmodel.findByIdAndUpdate({ _id: taskId }, { status });
    res.status(201).json({ message: "update success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete the task

const deleteTask = async (req, res) => {
  const { taskId } = req.body;

  try {
    let task = await Taskmodel.findByIdAndDelete({ _id: taskId });
    res.status(201).json({ message: "delete success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports={newTask,allTasks,getOneTask,updateTask,deleteTask}