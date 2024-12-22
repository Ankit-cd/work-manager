import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        default:Date.now(),
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Completed","Just_Added"],
        default:"Pending",
    },
    userId:{
        type:mongoose.ObjectId,
        required:true
    }
});

export const Task = mongoose.models.tasks || mongoose.model("tasks",taskSchema)