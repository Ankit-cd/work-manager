import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
export async function GET(request){
    const loginToken =request.cookies.get("loginToken")?.value;
    const tokendata = jwt.verify(loginToken,process.env.JWT_SECRET);
    const userId = tokendata._id;

    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);    
}