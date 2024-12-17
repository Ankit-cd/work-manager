import { NextResponse } from "next/server";

export async function DELETE(request,{params}){
    console.log(params);
    const { userId } = await params;
    console.log("User Id",userId);

    return NextResponse.json({
        message:"Testing Delete",
    });
}