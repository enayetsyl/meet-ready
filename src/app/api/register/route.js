import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


export const POST = async (request) =>{
try {
  const {name, email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({
    email
  })

  if (existingUser) {
    return new NextResponse ("Email is already in use", {status: 400})
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name, email,
    password: hashedPassword
  })

  try {
    await newUser.save();
    return new NextResponse("User is registered", {status: 200})
  } catch (error) {
    console.log(error)
    return new NextResponse(error, {status: 500})
  }
} catch (error) {
  console.log('Internal server error', error)
  return new NextResponse("Internal Server Error", {status: 500})
}


}