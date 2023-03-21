import React, { useState, useEffect } from "react";
import { getCategories } from "../../helpers/api_helper";
import CategoryCard from "../templates/CategoryCard";
import CategoryForm from "../templates/CategoryForm";

const Overview = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      console.log(`data ${data.categories[0].id}`);
      setCategories(data.categories);
    })();
  }, []);

  const renderCards = categories.map((category, index) => (
    <CategoryCard category={category} index={index} />
  ));

  return (
    <>
      <CategoryForm setCategories={setCategories} />
      {renderCards}
    </>
  );
};

export default Overview;
