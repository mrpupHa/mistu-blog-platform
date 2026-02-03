import React from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-[72px]">
        <div className="w-full md:max-w-[800px] rounded-2xl bg-[#f3f1ee] px-[120px] py-[60px] shadow-sm space-y-[40px] ">
          <h1 className="text-center text-2xl font-semibold text-brown-600 mb-8">
            Log in
          </h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-brown-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border bg-white border-gray-200 pl-[16px] pt-[12px] pr-[12px] pb-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-brown-300"
              />
            </div>

            <div>
              <label className="block  text-sm text-brown-400 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border bg-white border-gray-200 pl-[16px] pt-[12px] pr-[12px] pb-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-brown-300"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 py-[12px] px-[40px] rounded-full bg-brown-600 text-sm font-medium text-white hover:bg-brown-800 transition cursor-pointer"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-brown-400">
            Don't have any account?{" "}
            <a
              href="/signup"
              className="font-medium text-brown-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
