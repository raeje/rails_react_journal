import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const url = `/api/v1/categories/${params.id}/tasks`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Netwrok response was not ok.");
      })
      .then((response) => setCategory(response))
      .catch(() => navigate("/"));
  }, []);

  console.log(category.tasks);

  //const renderTasks = category.tasks.map((task) => <div>{task}</div>);

  return <div>{}</div>;
};

export default Category;
