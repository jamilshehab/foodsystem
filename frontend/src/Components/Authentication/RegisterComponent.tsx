import axios from "axios";
import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router";
import RegisterModal from "./SuccessModal/SuccessModal";
import { ToastContainer, toast } from "react-toastify";
const RegisterComponent = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [modal, setModal] = useState(false);

  const { firstName, lastName, email, password } = inputValue;

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
      position: "bottom-left",
    });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/register",
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
    } catch (error) {
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
    <section className="bg-gray-50  ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name"
                  value={firstName}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name"
                  value={lastName}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="someone@gmail.com"
                  value={email}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={handleOnChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already Have An Account{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign In
                </Link>
              </p>
              <button
                type="submit"
                className="w-full text-white bg-primary  hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer "
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {modal && (
        <RegisterModal
          isOpen={modal}
          description="User Register Success"
          title="User Success"
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default RegisterComponent;
