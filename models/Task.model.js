const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
  dueDate: {
    type: Date,
    require: true,
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    require: true,
  },
  status: {
    type: String,
    enum: ["pending", "inprogress", "completed"],
    require: true,
  },
});

const Taskmodel = mongoose.model("Task", taskSchema);

module.exports = {Taskmodel};
