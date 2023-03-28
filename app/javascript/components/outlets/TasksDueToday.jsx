import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  getCategories,
  getDueTasksToday,
  getTasks,
} from "../../helpers/api_helper";

const isTaskDueToday = (date) => {
  if (!date) return "";
  const today = new Date().toDateString();
  const dueDate = new Date(date).toDateString();
  return today === dueDate;
};

getDueTasksToday;

const TasksDueToday = () => {
  //const [categories, setCategories] = useState([]);
  const [dueTasks, setDueTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const tasks = await getDueTasksToday();
      console.log(tasks);
      setDueTasks(tasks.tasks);
    })();
  }, []);

  const renderRows = () => {
    console.log("dueTasks", dueTasks);
    return dueTasks.map((task, index) => {
      const [dueTask, categoryName] = task;
      return trTemplate(dueTask, categoryName, index);
    });
  };

  renderTaskStatus = (status) => {
    const color = () => {
      if (status === "POSTPONED") {
        return "bg-gray-100 text-gray-600";
      } else if (status === "IN PROGRESS") {
        return "bg-yellow-100 text-yellow-600";
      } else if (status === "INCOMPLETE") {
        return "bg-orange-100 text-orange-600";
      } else if (status === "COMPLETE") {
        return "bg-green-100 text-green-600";
      } else {
        return "bg-red-100 text-red-600";
      }
    };
    return (
      <div
        className={`p-2 pl-4 text-xs focus:outline-none leading-none rounded-full w-3/4 items-center ${color()}`}
      >
        {status || "UNKNOWN"}
      </div>
    );
  };

  const trTemplate = (task, categoryName, index) => {
    console.log(task.name, index);
    return (
      <>
        <tr
          tabIndex="0"
          className="focus:outline-none h-12 mt-1 border border-gray-100 rounded"
          key={index}
        >
          <td></td>
          <td className="">
            <div className="flex items-center pl-5">
              <p className="text-sm font-medium leading-none text-gray-700 mr-2">
                {task.name}
              </p>
            </div>
          </td>
          <td className="pl-24">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                  stroke="#52525B"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle
                  cx="7.50004"
                  cy="7.49967"
                  r="1.66667"
                  stroke="#52525B"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></circle>
              </svg>
              <p className="text-xs leading-none text-gray-600 ml-2">
                {task.description}
              </p>
            </div>
          </td>
          <td className="pl-14">
            <NavLink
              className="flex items-center text-blue-600 bg-blue-100 w-3/4 p-1 rounded-full hover:bg-blue-200"
              to={`/category/${task.category_id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-5 h-5 pl-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>

              <p className="p-1.5 text-xs leading-none text-blue-600 ml-1 ">
                {categoryName}
              </p>
            </NavLink>
          </td>
          <td className="pl-5">{renderTaskStatus(task.status)}</td>
          <td className="pl-4">
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 text-xs px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
              View
            </button>
          </td>
        </tr>
      </>
    );
  };

  return (
    <div className="sm:px-6 w-full h-full col-span-3 row-span-5">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-between">
          <p
            tabIndex="0"
            className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            Tasks Due Today
          </p>
        </div>
      </div>
      <div className="bg-white py-4 md:py-7 md:px-8 xl:px-10 border-2 rounded-lg border-gray-400 text-xs h-full">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
              <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>All</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-7 overflow-x-auto ">
          <table className="w-full whitespace-nowrap">
            <tbody>{renderRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TasksDueToday;
