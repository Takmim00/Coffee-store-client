import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";



const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className=" flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 border-2">
          <h2 className="text-2xl font-semibold text-center">
            Login your account
          </h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <Link
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-3 bottom-11"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </Link>
              <label className="label">
                <Link
                  to="/forgetPassword"
                 
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-sm">Login</button>
            </div>
          </form>
          <div className=" items-center flex justify-center mb-4">
            <button
              
              className="btn text-xl  rounded-lg w-[80%]"
            >
              <FaGoogle />
              Google
            </button>
          </div>
          <p className="text-center font-semibold">
            Don’t Have An Account ?{" "}
            <Link to="/register" className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
        </div>
    );
};

export default SignIn;