import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
export async function GET(request){
    try {
        const loginToken =request.cookies.get("loginToken")?.value;
        const tokendata = jwt.verify(loginToken,process.env.JWT_SECRET);
        const userId = tokendata._id;
    
        const user = await User.findById(userId).select("-password");
        return NextResponse.json(user); 
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get user",
            success:false
        },{status:400,statusText:"Bad Request"})    
        
    }   
}