import mongoose from "mongoose";

const UserSchema = new  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        unique:true
    },
    
    password:{
        type:String,
        required:true
    },
    timetable:{
        type:Array,
        default:[]
    },
    todos:{
        type:Array,
        default:[]
    },
    backgroundcolor:{
        type:String,
        default:"#cfc0eb"
    }
    
    

},{timestamps:true})
export default mongoose.model("User",UserSchema)