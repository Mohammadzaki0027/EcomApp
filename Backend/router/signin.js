const {Router}=require("express")
const UserController=Router()
const bcrypt=require("bcrypt")
const jwt=require("json-web-token")
const { LoginModel } = require("../model/signIn.Model")
require("dotenv").config()

//SingUp

UserController.post("/signup",(req,res)=>{
    const {password,email,name,mobilenumber}=req.body
if(password!==""&&email!==""&&mobilenumber!==""){
 // do something
}else{
// return errror
}




})

// Login 
UserController.post("/login",(req,res)=>{
    const {password,email}=req.body
if(password===""||email===""){
   res.send("Invalid Credential") 
   return
}
const user=LoginModel.findOne({email})
let hash=user.password
bcrypt.compare(password, hash, function(err, result) {

if(result){
res.status(200).json({token:"",status:"Login Sucessfully"})
}else{
    res.status(400).send('Try Again')
}
});

})