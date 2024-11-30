import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, createdAt };
        //save new user info to the database
        fetch("https://coffee-store-server-one-lilac.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user created to db", data);
            if (data.insertedId) {
              console.log("user created in db");
            }
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div className="  flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 border-2">
          <h2 className="text-2xl font-semibold text-center">Sign Up now</h2>
          <form on
          Submit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo"
                className="input input-bordered"
              />
            </div>
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
              <button className="btn btn-neutral rounded-sm">Register</button>
            </div>
          </form>
          <div className=" items-center flex justify-center mb-4">
            <button className="btn text-xl  rounded-lg w-[80%]">
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

export default SignUp;
