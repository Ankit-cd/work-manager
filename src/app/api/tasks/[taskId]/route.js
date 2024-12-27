import { connectDB } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// api/tasks/{taskId}

connectDB();
export async function GET(request,{params}){
    const {taskId} = await params;
    try {
       const task = await Task.findById(taskId);
       return NextResponse.json(task);
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in getting task !!",404,false);        
    }


}

export async function PUT(request,{params}) {
    const {taskId} = await params;
    const {title,status,content} = await request.json();
    try {
       let task = await Task.findById(taskId);
       task.title = title;
       task.content = content;
       task.status = status;

       const updatedTask = await task.save();

       return NextResponse.json(updatedTask);
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in updating task !!",500,false);        
    }

    
}

export async function DELETE(request,{params}) {
    const { taskId } = await params;
        try {
            await Task.deleteOne({
                _id:taskId
            });
    
            return getResponseMessage("task deleted !!",200,true);
            
        } catch (error) {
            console.log(error)
            return getResponseMessage("Error in deleting task !!",500,false);
            
        }
    
}