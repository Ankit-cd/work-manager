import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDB();
 
export async function GET(){
    try {
        const users = await User.find();
        return NextResponse.json(users);   
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get users",
            success:false
        },{status:400,statusText:"Bad Request"})
        
    }
};

export async function POST(request){
    try {
        const {name,email,password,about,profileURL} = await request.json();
        const user = new User({
            name,
            email,
            password,
            about,
            profileURL
        });

        user.password = bcrypt.hashSync(user.password,10);
        const createdUser = await user.save();

        const response = NextResponse.json(createdUser,{
            status:201,
        });
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to create user",
            success:false
        },{status:401,statusText:"failed"})     
    }

};

