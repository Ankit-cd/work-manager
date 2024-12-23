import { getResponseMessage } from "@/helper/responseMessage";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // get user by email
    const user = await User.findOne({ email: email });

    if (user == null) {
      return getResponseMessage("user not found", 400, false);
    }
    // compare password
    const matched = bcrypt.compareSync(password, user.password);

    if (!matched) {
      return getResponseMessage("password is incorrect", 400, false);
    }

    // create token
    const token = jwt.sign( 
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET,
    );

    const response = NextResponse.json({
      message : "login success",
      success : true,
    });

    response.cookies.set("loginToken",token,{
        expiresIn:"1d",
        httpOnly:true,
        secure:true,
    })

    console.log(user);
    console.log(token);

    return response;

  } catch (error) {
    console.log(error);
    return getResponseMessage("failed to login", 500, false);
  }
}
