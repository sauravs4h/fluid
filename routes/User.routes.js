const express=require("express");
const { signUp, logIn,getUser,logout } = require("../controllers/userService");
const userRouter= express.Router();

userRouter.post("/signup",signUp);
userRouter.post("/login",logIn);

module.exports={userRouter}