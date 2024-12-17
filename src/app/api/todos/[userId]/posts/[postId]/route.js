import { NextResponse } from "next/server";

export async function GET(request, context) {
    const { params } = await context; 
    const { userId, postId } = await params;
    console.log("User ID:", userId);
    console.log("Post ID:", postId);

    return NextResponse.json({ userId, postId });
}
