import React from "react";

const TasksTable = ({ list }) => {
  // todo: install font awesome to make this work
  //<i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
  const thClassName =
    "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left";

  const dateConverter = (date) => {
    return (
      <>
        <p>{new Date(date).toDateString()}</p>
        <p>{new Date(date).toLocaleTimeString()}</p>
      </>
    );
  };
  const renderTableRow = (item, index) => {
    const tdClassName =
      "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ";
    return (
      <tr key={`tr-${index}`}>
        <td className={tdClassName}>CRUD</td>
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
    return list.map((item, index) => renderTableRow(item, index));
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
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  CREATE
                </button>
              </div>
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

              <tbody>{renderRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasksTable;
