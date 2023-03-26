import React, { useState, useEffect } from "react";
import { getCategories } from "../../helpers/api_helper";
import CategoryCard from "../templates/CategoryCard";
import CategoryForm from "../templates/CategoryForm";
import { toast, ToastContainer } from "react-toastify";

const Overview = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data.categories);
    })();
  }, []);

  const renderCards = categories?.map((category, index) => (
    <CategoryCard
      category={category}
      index={index}
      key={index}
      setCategories={setCategories}
    />
  ));

  return (
    <>
      <CategoryForm setCategories={setCategories} />
      {renderCards}
      <ToastContainer />
    </>
  );
};

export default Overview;
