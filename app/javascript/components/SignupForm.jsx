import React, { useEffect, useState } from "react";
import { signup } from "../helpers/api_helper";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../helpers/util";

const initForm = {
  email: "",
  password: "",
  password_confirmation: "",
};

const SignupForm = () => {
  const divClassName = "flex items-center border-2 py-2 px-3 rounded-2xl";
  const inputClassName = "pl-2 outline-none border-none";
  const [signupForm, setSignupForm] = useState(initForm);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.token) {
      navigate("/dashboard");
    }
  });

  handleSubmit = async (e) => {
    e.preventDefault();
    const submitAction = await signup(signupForm);

    if (submitAction.status === 201) {
      console.log(submitAction);
      navigate("/auth/login");
      toast.success(submitAction.data.message);
    } else {
      //console.log(Object.keys(submitAction.errors));
      Object.keys(submitAction.errors).forEach((key) => {
        toast.error(`${key.toUpperCase()} ${submitAction.errors[key]}.`);
      });
    }
  };

  handleFormChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form className="bg-white">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign me up!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">
          Let's create your account.
        </p>

        <div className={`${divClassName} mb-4`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            className={`${inputClassName}`}
            type="text"
            name="email"
            onChange={handleFormChange}
            placeholder="Email Address"
          />
        </div>

        <div className={`${divClassName} mb-4`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className={`${inputClassName}`}
            type="password"
            name="password"
            onChange={handleFormChange}
            placeholder="Password"
          />
        </div>
        <div className={`${divClassName}  `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className={`${inputClassName}`}
            type="password"
            name="password_confirmation"
            onChange={handleFormChange}
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          onClick={handleSubmit}
        >
          Register
        </button>
        <span
          className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/auth/login")}
        >
          Already have an account?
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
