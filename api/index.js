import express from 'express';
const app=express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth'
dotenv.config();
import path from 'path';
mongoose.connect("mongodb://localhost:27017/delta_hack",{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Connected to MongoDB")
});
app.use(express.json());
app.use("/api/auth",authRoute);
app.listen(7000,()=>{
    console.log("Backend server is up and running");
})

