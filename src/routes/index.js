const express=require("express")
const login=require("../controllers/loginController.js")
const signup=require("../controllers/signupController.js")
const route=express.Router()


route.get("/",(req,res)=>{

    res.send("Welcome to backend api!")
})

route.post("/login",login)
route.post("/signup",signup)
module.exports=route