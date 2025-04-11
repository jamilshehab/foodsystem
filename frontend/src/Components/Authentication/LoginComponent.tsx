import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterModal from "./SuccessModal/SuccessModal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const LoginComponent = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { email, password } = inputValue;

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err: any) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg: any) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setModal(true);
        // setTimeout(() => {
        //   navigate("/");
        // }, 1000);
      } else {
        handleError(message);
      }
    } catch (error: any) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  const handleCloseModal = () => {
    setModal(false);
    navigate("/");
  };
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={handleOnChange}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary  hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer "
              >
                Sign in
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>

      {modal && (
        <RegisterModal
          isOpen={modal}
          description="User Login Success"
          title="User Logged In Success"
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default LoginComponent;
