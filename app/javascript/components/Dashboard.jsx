import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="grid grid-cols-12 max-h-screen box-border"
      id="dashboard-container"
    >
      <div className="col-span-2 box-border" id="dashboard-nav"></div>
      <div
        id="dasboard-body"
        className="overflow-scroll max-h-screen box-border col-span-10 border-black border-2 grid grid-cols-3 gap-10 p-12 place-content-between"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
