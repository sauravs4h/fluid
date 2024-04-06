const express=require("express");

const taskRouter= express.Router();

const { Auth }= require("../middlewares/userAuth")
const {newTask,allTasks,getOneTask,updateTask,deleteTask}=require("../controllers/TaskService");

// taskRouter.use(Auth);

taskRouter.post("/newTask",newTask);
taskRouter.get("/allTask",allTasks);
taskRouter.get("/getTask/:taskid",getOneTask);
taskRouter.patch("/updateTask",updateTask);
taskRouter.delete("/deleteTask",deleteTask);


module.exports={taskRouter}
