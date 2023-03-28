import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { getCurrentUser } from "../helpers/util";
import { logout } from "../helpers/api_helper";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser?.token) {
      navigate("/auth/login");
    }
  }, [currentUser]);

  const handleLogout = () => {
    const logoutAction = logout();
    setCurrentUser(getCurrentUser());
    console.log(logoutAction);
  };

  const LINK_INACTIVE_CLASS_NAME =
    "flex items-center mb-0.5 py-2 px-4 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100";
  const LINK_ACTIVE_CLASS_NAME =
    "flex items-center mb-0.5 py-2 px-4 bg-gray-700 text-gray-100 border-r-4 border-gray-100";

  const SPAN_CLASS_NAME = "mx-4 font-medium text-sm";
  return (
    <>
      <div
        className="grid grid-cols-12 max-h-screen box-border"
        id="dashboard-container"
      >
        <div className="bg-gray-200 col-span-2 box-border h-screen">
          <div className="flex flex-col sm:flex-row sm:justify-around">
            <div className="w-64 h-screen bg-gray-800 mt-8 sm:mt-0">
              <div className="flex justify-center content-center mt-10 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-20 h-20 text-cyan-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </div>
              <div className="flex justify-center content-center mt-5 mb-15 mx-auto">
                <span className="mx-4 font-medium text-3xl text-cyan-200 tracking-wide">
                  gtl app
                </span>
              </div>

              <nav className="mt-10">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? LINK_ACTIVE_CLASS_NAME : LINK_INACTIVE_CLASS_NAME
                  }
                  to="/summary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>

                  <span className={SPAN_CLASS_NAME}>Summary</span>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? LINK_ACTIVE_CLASS_NAME : LINK_INACTIVE_CLASS_NAME
                  }
                  to="/dashboard"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={SPAN_CLASS_NAME}>Categories</span>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? LINK_ACTIVE_CLASS_NAME : LINK_INACTIVE_CLASS_NAME
                  }
                  to="/tasks-due-today"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>

                  <span className={SPAN_CLASS_NAME}>Tasks Due Today</span>
                </NavLink>
              </nav>

              <div className="absolute bottom-0 my-10">
                <NavLink
                  className="flex items-center py-2 px-4 text-gray-600 hover:text-gray-500"
                  to="/auth/login"
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>

                  <span className={SPAN_CLASS_NAME}>Logout</span>
                </NavLink>
                <a
                  className="flex items-center py-2 px-4 text-gray-600 hover:text-gray-500"
                  href="#"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 7C9.63113 7 9.3076 7.19922 9.13318 7.50073C8.85664 7.97879 8.24491 8.14215 7.76685 7.86561C7.28879 7.58906 7.12543 6.97733 7.40197 6.49927C7.91918 5.60518 8.88833 5 10 5C11.6569 5 13 6.34315 13 8C13 9.30622 12.1652 10.4175 11 10.8293V11C11 11.5523 10.5523 12 10 12C9.44773 12 9.00001 11.5523 9.00001 11V10C9.00001 9.44772 9.44773 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className={SPAN_CLASS_NAME}>Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="dashboard-body"
          className="overflow-scroll h-screen max-h-screen border-gray-100 box-border col-span-10 grid grid-cols-3 grid-rows-6 gap-5 p-12 place-content-between bg-gray-50"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
