import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
  /*
  const handleLogout = async () => {
    const logoutAction = await logout({ email: currentUser.email });
    if (logoutAction.status === 200) {
      console.log(loginAction.data);
      toast.success(logoutAction.data.message);
      navigate("/dashboard");
    } else {
      toast.error(loginAction.error);
    }
  };
  */

  const handleLogout = () => {
    const logoutAction = logout();
    setCurrentUser(getCurrentUser());
    console.log(logoutAction);
  };

  return (
    <div
      className="grid grid-cols-12 max-h-screen box-border"
      id="dashboard-container"
    >
      <div className="col-span-2 box-border h-screen" id="dashboard-nav">
        <button
          className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div
        id="dashboard-body"
        className="overflow-scroll h-screen max-h-screen box-border col-span-10 border-black border-2 grid grid-cols-3 grid-rows- 4 gap-10 p-12 place-content-between"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
