import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../helpers/api_helper";

const Summary = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("mount");
    (async () => {
      const data = await getAllTasks();
      setTasks(data.tasks);
    })();
  }, []);

  const countTasksByStatus = (status) => {
    const count = tasks.filter((task) => {
      return task.status === status;
    });
    return count.length || 0;
  };

  return (
    <div className="sm:px-6 w-full h-full col-span-3 row-span-5">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-between">
          <p
            tabIndex="0"
            className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            Summary
          </p>
        </div>
      </div>
      <div className="bg-white py-4 md:py-7 md:px-8 xl:px-10 border-2 rounded-lg border-gray-400 text-xs h-full">
        <div class="grid grid-cols-12 gap-6 mt-5">
          <div class="px-8 p-5 transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-gray-100">
            <div class="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                />
              </svg>
            </div>
            <div class="ml-2 w-full flex-1">
              <div>
                <div class="mt-3 text-3xl font-bold leading-8">
                  {countTasksByStatus("POSTPONED")}
                </div>

                <div class="mt-1 text-base text-gray-600">Tasks Postponed</div>
              </div>
            </div>
          </div>

          <div class="px-8 py-5 transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-yellow-100">
            <div class="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-7 h-7 text-yellow-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
            <div class="ml-2 w-full flex-1">
              <div>
                <div class="mt-3 text-3xl font-bold leading-8 ">
                  {countTasksByStatus("IN PROGRESS")}
                </div>

                <div class="mt-1 text-base text-yellow-600">
                  Tasks In Progress
                </div>
              </div>
            </div>
          </div>

          <div class="px-8 p-5 transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-orange-100">
            <div class="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-7 h-7 text-orange-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div class="ml-2 w-full flex-1">
              <div>
                <div class="mt-3 text-3xl font-bold leading-8">
                  {countTasksByStatus("INCOMPLETE")}
                </div>

                <div class="mt-1 text-base text-orange-600">
                  Tasks Incomplete
                </div>
              </div>
            </div>
          </div>

          <div class="px-8 p-5 transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-green-100">
            <div class="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-7 h-7 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div class="ml-2 w-full flex-1">
              <div>
                <div class="mt-3 text-3xl font-bold leading-8">
                  {countTasksByStatus("COMPLETE")}
                </div>

                <div class="mt-1 text-base text-green-600">Tasks Completed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 overflow-x-auto "></div>
      </div>
    </div>
  );
};

export default Summary;
