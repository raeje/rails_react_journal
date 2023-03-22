import React, { useEffect, useState } from "react";
import { getTasks, createTask } from "../helpers/api_helper";

// todo: install font awesome to make this work
//<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>

const initState = {
  name: "",
  description: "",
};

const TasksTable = ({ categoryId, tasks, setTasks }) => {
  const [task, setTask] = useState(initState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleCreateTask = async () => {
    console.log(categoryId);
    console.log(`name: ${task.name}`);
    console.log(`description: ${task.description}`);

    // Create a task
    const createAction = await createTask({
      category_id: categoryId,
      name: task.name,
      description: task.description,
    });

    // Update tasks list
    const getTasksAction = await getTasks(categoryId);
    setTasks(getTasksAction.tasks);

    // Reset form fields
    setTask(initState);
    console.log(createAction);
  };

  const dateConverter = (date) => {
    return (
      <>
        <p>{new Date(date).toDateString()}</p>
        <p>{new Date(date).toLocaleTimeString()}</p>
      </>
    );
  };

  const thClassName =
    "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";
  const tdClassName =
    "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ";
  const inputClassName = " px-2 py-1 ";

  const renderTableRow = (item, index) => {
    const buttonClassName = "rounded-lg p-2 text-lg m-1 text-white ";
    return (
      <tr key={`tr-${index}`}>
        <td className={tdClassName}>
          <div className="w-full flex justify-evenly">
            <button
              className={`fa-regular fa-floppy-disk bg-orange-600 ${buttonClassName}`}
            />
            <button
              className={`fa-regular fa-trash-can bg-red-600 ${buttonClassName}`}
            />
          </div>
        </td>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
          {item.name}
        </th>
        <td className={tdClassName}>{item.description}</td>
        <td className={tdClassName}>{dateConverter(item.created_at)}</td>
        <td className={tdClassName}>{dateConverter(item.updated_at)}</td>
      </tr>
    );
  };

  const renderRows = () => {
    return tasks.map((item, index) => renderTableRow(item, index));
  };

  const renderCreateForm = () => {
    return (
      <tr key={`tr-create-form`}>
        <td className={tdClassName}>
          <button
            onClick={handleCreateTask}
            className="fa-solid fa-plus text-lg w-full p-2 rounded-lg text-lg text-white bg-green-600"
          />
        </td>
        <td className={tdClassName}>
          <input
            type="text"
            className={inputClassName}
            name="name"
            value={task.name}
            onChange={handleFormChange}
          />
        </td>
        <td className={tdClassName}>
          <input
            type="text"
            className={inputClassName}
            value={task.description}
            name="description"
            onChange={handleFormChange}
          />
        </td>
        <td className={tdClassName}>
          <input
            type="datetime-local"
            className={inputClassName}
            id="new-created-at"
          />
        </td>
        <td className={tdClassName}>
          <input
            type="datetime-local"
            className={inputClassName}
            id="new-updated-at"
          />
        </td>
      </tr>
    );
  };

  return (
    <section className="py-1 bg-blueGray-50 w-full">
      <div className="w-full xl:mb-0 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Tasks
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className={thClassName}>Actions</th>
                  <th className={thClassName}>Task name</th>
                  <th className={thClassName}>Description</th>
                  <th className={thClassName}>Create Date</th>
                  <th className={thClassName}>Last Updated</th>
                </tr>
              </thead>

              <tbody>
                {renderCreateForm()}
                {renderRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasksTable;
