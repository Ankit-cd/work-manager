import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

// get all the tasks
export async function GET(request){
    try {
        const tasks = await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in getting tasks !!",404,false)
        
    }

}


// create all the tasks 
export async function POST(request){
    const {title,content,status,userId} = await request.json();

    // fetching looged in user id

    const loginToken = request.cookies.get("loginToken")?.value;
    const data = jwt.verify(loginToken,process.env.JWT_SECRET);
    try {
        const task = new Task({
            title,
            content,
            userId:data._id,
            status
        });

        const createdTask = await task.save();
        return NextResponse.json(createdTask,{
            status:201
        });
        
    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to create task !!",500,false)
    }

}