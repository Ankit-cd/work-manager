"use client";

import Image from "next/image";
import signupimg from "../../assests/signup.svg";
import { toast } from "react-toastify";
import { useState } from "react";
import { signUp } from "@/services/userService";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      data.name.trim() === "" ||
      data.email.trim() === "" ||
      data.password.trim() === "" ||
      data.about.trim() === ""
    ) {
      toast.warning("Please fill all the fields", {
        position: "top-center",
      });
      return;
    }
    try {
      const result = await signUp(data);
      toast.success("User created successfully", { position: "top-center" });

    } catch (error) {
      toast.error("Failed to create user", { position: "top-center" });
    }
  };

  const handleReset = () => { 
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    });
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl text-center mt-5">SignUp here</h1>
      <div className="md:flex w-[80%] gap-5 justify-center items-center mt-6">
        {/* image div */}
        <div className="w-[85%] md:w-full flex-1 mx-auto">
          <Image className="w-full" src={signupimg} alt="addtask" />
        </div>

        <div className="h-96 w-[0.5px] mx-7 bg-slate-700 hidden md:block"></div>

        <div className="flex-1 w-full h-full">
          <form className="w-full h-full" onSubmit={handleSignUp}>
            <div className="mt-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Username
              </label>
              <input
                value={data.name}
                id="username"
                name="user_name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                placeholder="Enter here"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Email
              </label>
              <input
                name="email"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                placeholder="Enter here"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                placeholder="Enter here"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="about"
                className="block text-sm font-medium mb-2 ps-2"
              >
                About
              </label>
              <textarea
                name="about"
                id="about"
                value={data.about}
                onChange={(e) => setData({ ...data, about: e.target.value })}
                type="text"
                placeholder="Enter here"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                rows={4}
              />
            </div>

            {/* buttion action */}

            <div className="mt-4 flex justify-center gap-6 w-full">
              <button
                type="submit"
                className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
              >
                SignUp
              </button>
              <button onClick={handleReset} type="button" className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
