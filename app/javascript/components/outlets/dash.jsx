import React from "react";

/*
    <div className="sm:px-6 w-full h-full col-span-3 row-span-5">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-between">
          <p
            tabIndex="0"
            className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            Tasks
          </p>
        </div>
      </div>

      <div className="bg-white py-4 md:py-7 md:px-8 xl:px-10 border-2 rounded-lg border-gray-400 text-xs h-full">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
              <CategoryForm setCategories={setCategories} />
              {renderCards}
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>

    <NavLink
                  className={({ isActive }) =>
                    isActive ? LINK_ACTIVE_CLASS_NAME : LINK_INACTIVE_CLASS_NAME
                  }
                  to="/signup"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={SPAN_CLASS_NAME}>Tickets</span>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? LINK_ACTIVE_CLASS_NAME : LINK_INACTIVE_CLASS_NAME
                  }
                  to="/login"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={SPAN_CLASS_NAME}>Settings</span>
                </NavLink>
              </nav>
*/
const dash = () => {
  return (
    <>
      <div class="flex h-screen bg-gray-800 ">
        <main class="">
          <div class="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
            <div class="grid grid-cols-12 gap-6">
              <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                <div class="col-span-12 mt-8">
                  <div class="flex items-center h-10 intro-y">
                    <h2 class="mr-5 text-lg font-medium truncate">Dashboard</h2>
                  </div>
                  <div class="grid grid-cols-12 gap-6 mt-5">
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          <div class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">30%</span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <div class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">30%</span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-pink-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                            />
                          </svg>
                          <div class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">30%</span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                            />
                          </svg>
                          <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">30%</span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-span-12 mt-5">
                  <div class="grid gap-2 grid-cols-1 lg:grid-cols-2">
                    <div class="bg-white shadow-lg p-4" id="chartline"></div>
                    <div class="bg-white shadow-lg" id="chartpie"></div>
                  </div>
                </div>
                <div class="col-span-12 mt-5">
                  <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                    <div class="bg-white p-4 shadow-lg rounded-lg">
                      <h1 class="font-bold text-base">Table</h1>
                      <div class="mt-4">
                        <div class="flex flex-col">
                          <div class="-my-2 overflow-x-auto">
                            <div class="py-2 align-middle inline-block min-w-full">
                              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                <table class="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">PRODUCT NAME</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">Stock</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">STATUS</span>
                                        </div>
                                      </th>
                                      <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex cursor-pointer">
                                          <span class="mr-2">ACTION</span>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <p>Apple MacBook Pro 13</p>
                                        <p class="text-xs text-gray-400">
                                          PC & Laptop
                                        </p>
                                      </td>
                                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <p>77</p>
                                      </td>
                                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <div class="flex text-green-500">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                          <p>Active</p>
                                        </div>
                                      </td>
                                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <div class="flex space-x-4">
                                          <a
                                            href="#"
                                            class="text-blue-500 hover:text-blue-600"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              class="w-5 h-5 mr-1"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                              />
                                            </svg>
                                            <p>Edit</p>
                                          </a>
                                          <a
                                            href="#"
                                            class="text-red-500 hover:text-red-600"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              class="w-5 h-5 mr-1 ml-3"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                              />
                                            </svg>
                                            <p>Delete</p>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div class="flex items-center justify-center py-8 px-4">
        <div class="max-w-sm w-full shadow-lg">
          <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
            <div class="px-4 flex items-center justify-between">
              <span
                tabindex="0"
                class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
              >
                October 2020
              </span>
              <div class="flex items-center">
                <button
                  aria-label="calendar backward"
                  class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevron-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </button>
                <button
                  aria-label="calendar forward"
                  class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler  icon-tabler-chevron-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between pt-12 overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          Sa
                        </p>
                      </div>
                    </th>
                    <th>
                      <div class="w-full flex justify-center">
                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          Su
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pt-6">
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td class="pt-6">
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                    </td>
                    <td class="pt-6">
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          1
                        </p>
                      </div>
                    </td>
                    <td class="pt-6">
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          2
                        </p>
                      </div>
                    </td>
                    <td class="pt-6">
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100">
                          3
                        </p>
                      </div>
                    </td>
                    <td class="pt-6">
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100">
                          4
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          5
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          6
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          7
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="w-full h-full">
                        <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <a
                            role="link"
                            tabindex="0"
                            class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                          >
                            8
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          9
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100">
                          10
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100">
                          11
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          12
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          13
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          14
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          15
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          16
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100">
                          17
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100">
                          18
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          19
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          20
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          21
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          22
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          23
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100">
                          24
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100">
                          25
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          26
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          27
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          28
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          29
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                          30
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div class="px-4">
              <div class="border-b pb-4 border-gray-400 border-dashed">
                <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  9:00 AM
                </p>
                <a
                  tabindex="0"
                  class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                >
                  Zoom call with design team
                </a>
                <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
              <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  10:00 AM
                </p>
                <a
                  tabindex="0"
                  class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                >
                  Orientation session with new hires
                </a>
              </div>
              <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  9:00 AM
                </p>
                <a
                  tabindex="0"
                  class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                >
                  Zoom call with design team
                </a>
                <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dash;
