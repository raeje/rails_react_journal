import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCategory,
  updateCategory,
  getTasks,
} from "../../helpers/api_helper";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [tasks, setTasks] = useState([]);
  const categoryName = useRef("");
  const categoryDesc = useRef("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCategory(params.id);
      //console.log(`category ${data.categories[0]}`);
      setCategory(data.categories[0]);
      setCategoryReference(data.categories[0]);

      const tasksData = await getTasks(params.id);
      setTasks(tasksData.tasks);
    })();
  }, []);

  const setCategoryReference = (category) => {
    categoryName.current.value = category.name;
    categoryDesc.current.value = category.description;
  };

  const handleCategoryNameChange = (e) => {
    categoryName.current.value = e.target.value;
  };

  const handleCategoryDescChange = (e) => {
    categoryDesc.current.value = e.target.value;
  };

  const handleUpdateCategory = async () => {
    const response = await updateCategory({
      id: params.id,
      name: categoryName.current.value,
      description: categoryDesc.current.value,
    });
    console.log(response);
    setCategory(response);
    return response;
  };

  //tasks.forEach((task) => console.log(task));

  return (
    <div className="max-h-screen border-gray border-2 rounded-md col-span-3 p-5 grid grid-cols-8 grid-rows-2 gap-1">
      <input
        type="text"
        disabled={false}
        ref={categoryName}
        className="border-none text-3xl py-1 col-span-7"
        onChange={(e) => handleCategoryNameChange(e)}
      />
      <input
        type="text"
        disabled={false}
        ref={categoryDesc}
        className="border-none text-sm py-1 text-gray-400 col-span-7"
        onChange={(e) => handleCategoryDescChange(e)}
      />
      <button
        className="row-start-1 col-start-8 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-xs w-3/5 h-1/2 mr-0 mt-0"
        onClick={handleUpdateCategory}
      >
        Save
      </button>
    </div>
  );
};

export default Category;
