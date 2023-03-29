import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../helpers/api_helper";
import { getCurrentUser } from "../helpers/util";

const initLoginForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState(initLoginForm);
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.token) {
      navigate("/summary");
    }
  });

  handleFormChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const loginAction = await login({
      email: loginForm.email,
      password: loginForm.password,
    });

    if (loginAction.status === 200) {
      toast.success(`Welcome back ${loginForm.email}!`);
      navigate("/summary");
    } else {
      toast.error(loginAction.error);
    }
  };

  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form className="bg-white">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
            className="pl-2 outline-none border-none"
            type="text"
            name="email"
            onChange={handleFormChange}
            placeholder="Email Address"
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
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
            className="pl-2 outline-none border-none"
            type="password"
            name="password"
            onChange={handleFormChange}
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <span
          className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
          onClick={() => toast.info("Email verification sent.")}
        >
          Forgot Password?
        </span>
        <br />
        <span
          className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/auth/signup")}
        >
          Don't have an account?
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
