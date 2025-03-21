import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="bg-grey-lighter text-base text-grey-darkest font-normal relative">
      <div className="h-2 bg-primary"></div>
      <div className="container mx-auto p-8">
        <div className="mx-auto max-w-sm">
          <div className="bg-white rounded shadow">
            <div className="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
              Welcome back!
            </div>

            <form className="bg-grey-lightest px-10 py-10">
              <div className="mb-3">
                <input
                  className="border w-full p-3"
                  name="email"
                  type="text"
                  placeholder="E-Mail"
                />
              </div>
              <div className="mb-6">
                <input
                  className="border w-full p-3"
                  name="password"
                  type="password"
                  placeholder="**************"
                />
              </div>
              <div className="flex">
                <button className="bg-primary hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
                  Login
                </button>
              </div>
            </form>

            <div className="border-t px-10 py-6">
              <div className="flex justify-between">
                <Link
                  to="#"
                  className="font-bold text-primary hover:text-primary-dark no-underline"
                >
                  Don't have an account?
                </Link>
                <Link
                  to="#"
                  className="text-grey-darkest hover:text-black no-underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
