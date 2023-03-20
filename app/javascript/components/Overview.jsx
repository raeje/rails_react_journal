import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../helpers/api_helper";
import CategoryCard from "./templates/CategoryCard";

const Overview = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    /*
    const url = "/api/v1/categories";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setCategories(response.categories))
      .catch(() => navigate("/"));
    */
    (async () => {
      const data = await getCategories();
      console.log(`data ${data.categories[0].id}`);
      setCategories(data.categories);
    })();
  }, []);

  const renderCards = categories.map((category, index) => (
    <CategoryCard category={category} index={index} />
  ));

  return <>{renderCards}</>;
};

export default Overview;
