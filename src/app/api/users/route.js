import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";

connectDB();

export function GET(){
    const users = [
        {
            name:"Kushal",
            course:"cpp"
        },
        {
            name:"Ankit",
            course:"java"
        },
        {
            name:"Random",
            course:"python"
        },
    ];
    return NextResponse.json(users);   
};

export async function POST(request){
    const jsonData = await request.json();
    console.log(jsonData);

    return NextResponse.json({
        data:jsonData,
        message:"posting user data",
    });
};

export function PUT(){};
export function DELETE(){
    console.log("delete api called");
    return NextResponse.json({
        message:"deleted !!",
        status:true
    },{status:201,statusText:"New Text"})
};
