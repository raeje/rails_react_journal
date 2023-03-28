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
      <div className="sm:px-6 w-full h-full col-span-3 row-span-5">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p
              tabIndex="0"
              className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
            >
              Categories
            </p>
          </div>
        </div>
        <div className="bg-white border-2 rounded-lg border-gray-400 text-xs h-full">
          <div className="overflow-x-scroll h-full max-h-full border-gray-100 box-border col-span-10 grid grid-cols-3 grid-rows-6 gap-5 p-6 place-content-between">
            <CategoryForm setCategories={setCategories} />
            {renderCards}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Overview;
