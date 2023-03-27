import React, { useEffect, useState } from "react";
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

  const filterTasks = async (categories) => {
    let allDueTasks = [];
    await categories.forEach(async (category) => {
      const tasks = await getTasks(category.id);
      const dueToday = await tasks.tasks
        .filter((task) => isTaskDueToday(task.due_date))
        .map((task) => {
          return { ...task, ["category.name"]: category.name };
        });
      return allDueTasks.push(...dueToday);
    });
    console.log("filterTasks", ...allDueTasks);
    return allDueTasks;
  };

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
      return trTemplate(task, index);
    });
  };

  const trTemplate = (task, index) => {
    console.log(task.name, index);
    return (
      <>
        <tr className="h-1"></tr>
        <tr
          tabIndex="0"
          className="focus:outline-none h-12 border border-gray-100 rounded"
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

          <td className="pl-5">
            <button className="p-3 text-xs focus:outline-none leading-none text-red-700 bg-red-100 rounded-full">
              Status
            </button>
          </td>
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
    <div className="sm:px-6 w-full h-full col-span-3">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-between">
          <p
            tabIndex="0"
            className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            Tasks
          </p>
          <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
            <p>Sort By:</p>
            <select
              aria-label="select"
              className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
            >
              <option className="text-sm text-indigo-800">Latest</option>
              <option className="text-sm text-indigo-800">Oldest</option>
              <option className="text-sm text-indigo-800">Latest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 md:py-7 md:px-8 xl:px-10 border-2 border-red-500 text-xs h-full">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
              <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>All</p>
              </div>
            </a>
            <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Done</p>
              </div>
            </a>
            <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Pending</p>
              </div>
            </a>
          </div>
          <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p className="text-xs font-medium leading-none text-white">
              Add Task
            </p>
          </button>
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
