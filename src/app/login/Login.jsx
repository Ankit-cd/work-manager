"use client";
import Image from "next/image";
import loginimg from "../../assests/login.svg";
import { toast } from "react-toastify";
import { useState } from "react";
import { logIn } from "@/services/userService";
import { useRouter } from "next/navigation";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      if (data.email.trim() === "" || data.password.trim() === "") {
        toast.info("invalid data !!", {
          position: "top-center",
        });
        return;
      }
      const result = await logIn(data);
      toast.success("Login successfull", {
        position: "top-center",
      });

      router.push("/profile/user");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const handleReset = () => {
    setData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex justify-center flex-col items-center pb-12 pt-[3px]">
      <h1 className="text-2xl text-center mt-5">LogIn here</h1>
      <div className="md:flex w-[80%] gap-5 justify-center items-center mt-6">
        {/* image div */}
        <div className="w-[85%] md:w-full flex-1 mx-auto">
          <Image className="w-full" src={loginimg} alt="addtask" />
        </div>

        <div className="h-96 w-[0.5px] mx-7 bg-slate-700 hidden md:block"></div>

        <div className="flex-1 w-full h-full">
          <form onSubmit={handleLogIn} className="w-full h-full">
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
                type="text"
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

            {/* buttion action */}

            <div className="mt-4 flex justify-center gap-6 w-full">
              <button
                type="submit"
                className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
              >
                Login
              </button>
              <button
                onClick={handleReset}
                type="button"
                className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
