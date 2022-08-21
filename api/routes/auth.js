import express from "express";
import Users from "../models/Users";
const router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
//Register
router.post('/register',async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        
        const Newuser= await new Users({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })
        
        const user_data= await Newuser.save()
        res.status(200).json(user_data);
    }catch(err){
        res.status(500).json(err);
    }
    
    
})

//Login
router.post("/login",async (req,res)=>{

    try{
        const user= await Users.findOne({email:req.body.email})
        !user && res.status(404).json("User not found")
        const password_matching=await bcrypt.compare(req.body.password,user.password)
        !password_matching && res.status(404).json("Password not matchiing");
        const token = await jwt.sign({email:user.email,username:user.username,backgroundcolor:user.backgroundcolor,timetable:user.timetable,
            todos:user.todos},process.env.JWT_SECRET)
        res.json({data:{token,
            user:{
                id:user._id,
                email:user.email,
                timetable:user.timetable,
                todos:user.todos,
                backgroundcolor:user.backgroundcolor
            }}})
        
    }catch(err){
        res.status(500).json(err);
    }
})


export function authenticateToken(req,res,next){
    const authHeader=req.headers.authorization
    const token=authHeader && authHeader.split(" ")[1]
    if(token==null){
        return res.status(401)
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
           return res.status(403).json("Token is not valid!");
        }
        req.user=user
        console.log(user)
        next()
    })

}
router.put("/updatecolor",authenticateToken,async (req,res)=>{
    try{

        console.log("inside try catch of update color")
        console.log(req.user.email)
        console.log(req.body.backgroundcolor)
        const currentUser=await Users.updateOne({email:req.user.email},{$set:{
            backgroundcolor:req.body.backgroundcolor
        }},{
            new:true
        })
        console.log(`currentUser :${currentUser}`)
        res.status(200).json(currentUser)
        
        
        
        
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/isUserAuth",authenticateToken,(req,res)=>{
    res.send("authenticated")
})
router.get("/home",authenticateToken,async (req,res)=>{

    try{
        res.json(req.user)
        
    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/currentuser",authenticateToken,async (req,res)=>{
    try{
        const curretUser= await Users.findOne({email:req.user.email})
        res.status(200).json(curretUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.put("/updateTT",authenticateToken,async (req,res)=>{
    try{
        const updatedUser=await Users.findOneAndUpdate({email:req.user.email},{$push:{timetable:req.body}},{new:true})
        
        res.json(updatedUser)
        
    }catch(err){
        res.status(500).json(err);
    }
})
router.put("/updateTodo",authenticateToken,async (req,res)=>{
    try{
        const updatedUser=await Users.findOneAndUpdate({email:req.user.email},{$push:{todos:req.body}},{new:true})
        
        res.json(updatedUser)
        
    }catch(err){
        res.status(500).json(err);
    }
})
router.put("/deleteTodo",authenticateToken,async (req,res)=>{
    try{
        const updatedUser=await Users.findOneAndUpdate({email:req.user.email},{$pull:{todos:req.body}},{new:true})
        
        res.json(updatedUser)
        
    }catch(err){
        res.status(500).json(err);
    }
})


export default router;