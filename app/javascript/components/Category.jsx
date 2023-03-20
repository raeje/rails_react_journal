import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory, getTasks } from "../helpers/api_helper";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCategory(params.id);
      console.log(`category ${category}`);
      setCategory(data.categories[0]);

      const tasksData = await getTasks(params.id);
      setTasks(tasksData.tasks);
    })();
  }, []);

  tasks.forEach((task) => console.log(task));

  //const renderTasks = category.tasks.map((task) => <div>{task}</div>);

  return <div>{category.name}</div>;
};

export default Category;
