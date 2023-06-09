import React, { useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../helpers/api_helper";
import { toast, ToastContainer } from "react-toastify";

// todo: install font awesome to make this work
//<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>

const initState = {
  name: "",
  description: "",
  due_date: "",
  status: "",
};

const datetimeLocal = (datetime) => {
  if (!datetime) return "";
  const dt = new Date(datetime);
  dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
  return dt.toISOString().slice(0, 16);
};

const dateConverter = (date) => {
  return (
    <>
      <p>{new Date(date).toDateString()}</p>
      <p>{new Date(date).toLocaleTimeString()}</p>
    </>
  );
};

const TasksTable = ({ categoryId, tasks, setTasks }) => {
  const [task, setTask] = useState(initState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleCreateTask = async () => {
    // Create a task
    const createAction = await createTask({
      category_id: categoryId,
      name: task.name,
      description: task.description,
      due_date: task.due_date,
      status: task.status,
    });

    if (createAction.status === 201) {
      toast.success(createAction.data.message);
    } else {
      Object.keys(createAction.errors).forEach((key) => {
        toast.error(`${key.toUpperCase()} ${createAction.errors[key]}.`);
      });
    }

    // Update tasks list
    const getTasksAction = await getTasks(categoryId);
    setTasks(getTasksAction.tasks);

    // Reset form fields
    setTask(initState);
    console.log(createAction);
  };

  const renderCreateForm = () => {
    return (
      <tr key={`tr-create-form`}>
        <td className={tdClassName}>
          <button
            onClick={() => {
              setTask(initState);
            }}
            className="fa-solid fa-rotate-right text-lg w-8 h-8 rounded-lg text-lg bg-teal-100 hover:bg-teal-200 text-teal-600"
          />
          <button
            onClick={handleCreateTask}
            className="ml-2 fa-solid fa-plus text-lg w-8 h-8 rounded-lg text-lg bg-green-100 hover:bg-green-200 text-green-600"
          />
        </td>
        <td className={tdClassName}>
          <input
            type="text"
            className={inputClassName + "pr-5"}
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
          <select
            name="status"
            className={inputClassName + " w-50 min-w-50"}
            value={task.status}
            onChange={handleFormChange}
          >
            <option value=""></option>
            <option value="POSTPONED">POSTPONED</option>
            <option value="IN PROGRESS">IN PROGRESS</option>
            <option value="INCOMPLETE">INCOMPLETE</option>
            <option value="COMPLETE">COMPLETE</option>
          </select>
        </td>
        <td className={tdClassName}>
          <input
            type="datetime-local"
            className={inputClassName}
            name="due_date"
            onChange={handleFormChange}
          />
        </td>
      </tr>
    );
  };

  const handleTaskActions = async (e) => {
    const [action, id] = e.target.name.split("-");
    const nameDOM = document.querySelector(`input[name=name-${id}]`);
    const descriptionDOM = document.querySelector(
      `input[name=description-${id}]`
    );
    const dueDateDOM = document.querySelector(`input[name=due_date-${id}]`);
    const statusDOM = document.querySelector(`select[name=status-${id}]`);

    if (action === "update") {
      const updateAction = await updateTask({
        category_id: categoryId,
        id,
        name: nameDOM.value,
        description: descriptionDOM.value,
        due_date: dueDateDOM.value,
        status: statusDOM.value,
      });

      if (updateAction.status === 200) {
        toast.success(updateAction.data.message);
      } else {
        Object.keys(updateAction.errors).forEach((key) => {
          toast.error(`${key.toUpperCase()} ${updateAction.errors[key]}.`);
        });
      }
    }

    if (action === "delete") {
      const deleteAction = await deleteTask({
        category_id: categoryId,
        id,
      });
      toast.success(deleteAction.data.message);

      const getTasksAction = await getTasks(categoryId);
      setTasks(getTasksAction.tasks);
    }
  };

  const thClassName =
    "px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";
  const tdClassName =
    "border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1 ";
  const inputClassName = " rounded-lg ";

  const renderTableRow = (item) => {
    const buttonClassName = "rounded-lg p-2 text-lg m-1 ";

    return (
      <tr key={`tr-${item.id}`}>
        <td className={tdClassName}>
          <div className="w-4/5 flex justify-evenly px-2">
            <button
              className={` w-8 h-8 fa-regular fa-floppy-disk bg-orange-100 hover:bg-orange-200 text-orange-600 ${buttonClassName}`}
              name={`update-${item.id}`}
              onClick={handleTaskActions}
            ></button>
            <button
              className={` w-8 h-8 fa-regular fa-trash-can bg-red-100 hover:bg-red-200 text-red-600 ${buttonClassName}`}
              name={`delete-${item.id}`}
              onClick={handleTaskActions}
            ></button>
          </div>
        </td>
        <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left text-blueGray-700 ">
          <input
            type="text"
            defaultValue={item.name}
            name={`name-${item.id}`}
            className={inputClassName}
          />
        </th>
        <td className={tdClassName}>
          <input
            type="text"
            defaultValue={item.description}
            name={`description-${item.id}`}
            className={inputClassName}
          />
        </td>
        <td className={tdClassName}>
          <select
            name={`status-${item.id}`}
            type="text"
            className={inputClassName + " w-full"}
            defaultValue={item.status}
            id="new-status"
          >
            <option value=""></option>
            <option value="POSTPONED">POSTPONED</option>
            <option value="IN PROGRESS">IN PROGRESS</option>
            <option value="INCOMPLETE">INCOMPLETE</option>
            <option value="COMPLETE">COMPLETE</option>
          </select>
        </td>
        <td className={tdClassName}>
          <input
            type="datetime-local"
            name={`due_date-${item.id}`}
            className={inputClassName}
            defaultValue={datetimeLocal(item.due_date)}
          />
        </td>
        <td className={tdClassName}></td>
      </tr>
    );
  };

  const renderRows = () => {
    return tasks.map((item) => renderTableRow(item));
  };

  return (
    <section className="py-1 bg-blueGray-50 w-full max-h-screen">
      <div className="xl:mb-0 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-full shadow-lg rounded ">
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
                  <th className={thClassName}>Status</th>
                  <th className={thClassName}>Due Date</th>
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
      <ToastContainer />
    </section>
  );
};

export default TasksTable;
