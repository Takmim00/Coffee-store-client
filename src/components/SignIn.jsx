import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        //update last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;

        const loginInfo = { email, lastSignInTime };

        fetch(`https://coffee-store-server-one-lilac.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("sign in info updated in db", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className=" flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 border-2">
          <h2 className="text-2xl font-semibold text-center">
            Login your account
          </h2>
          <form onSubmit={handleSignIn} className="card-body">
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
            <button className="btn text-xl  rounded-lg w-[80%]">
              <FaGoogle />
              Google
            </button>
          </div>
          <p className="text-center font-semibold">
            New to coffee drinker :
            <Link to="/signup" className="text-red-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
