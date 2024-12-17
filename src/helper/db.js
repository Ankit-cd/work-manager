import mongoose from "mongoose";
import { User } from "@/models/user";
export const connectDB = async () =>{
    try {
       const {connection} = await mongoose.connect(process.env.DATABASE_URL,{
            dbName:'WorkManagerDb'
        });

        console.log("Database connected....😏😏",connection.host);

        // testing and creating new user
    //     const newuser =new User({
    //         name:"test name",
    //         email:'test@gmail.com',
    //         password:"testpassword",
    //         about:"this is testing"
    //     })

    //    await newuser.save();

    //    console.log("User is created 🎉🎊🎊🎊🎉");



        
    } catch (error) {
        console.log('Failed to connect with Database 😥😥',error)
        
    }
}