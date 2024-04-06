const express=require("express");

const taskRouter= express.Router();

const { Auth }= require("../middlewares/userAuth")
const {newTask,allTasks,getOneTask,updateTask,deleteTask}=require("../controllers/TaskService");



taskRouter.post("/newTask",Auth,newTask);
taskRouter.get("/allTask",Auth,allTasks);
taskRouter.get("/getTask/:taskid",Auth,getOneTask);
taskRouter.patch("/updateTask",Auth,updateTask);
taskRouter.delete("/deleteTask",Auth,deleteTask);


module.exports={taskRouter}
