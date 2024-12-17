import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        require:true
    },
    about:String,
    profileURL:{
        type:String
    },
    // address:{
    //     street:String,
    //     city:String,
    //     country:String,
    //     pinCode:Number
    // }
});

export const User = mongoose.models.users || mongoose.model("users",userSchema);
