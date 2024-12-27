import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

export async function DELETE(request,{params}){
    const { userId } = await params;
    try {
        await User.deleteOne({
            _id:userId
        });

        return NextResponse.json({
            message:"user deleted succesfully",
            success:true
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"user not deleted",
            success:false
        },{status:400,statusText:"Bad Request"})
        
    }
}
export async function GET(request,{params}){
    const { userId } = await params;
    try {
        const user = await User.findById({
            _id:userId
        }).select("-password");

        return NextResponse.json(user)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"user doesn't exist",
            success:false
        },{status:400,statusText:"Bad Request"})
        
    }
}

export async function PUT(request, {params}){
    try {
        const {userId }= await params
        const {name,password,about,profileURL} = await request.json();

        let user = await User.findById(userId);
        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;

        const updatedUser = await user.save();

        const response = NextResponse.json(updatedUser,{
            status:201,
        });
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to update user",
            success:false
        },{status:401,statusText:"failed"})     
    }

};