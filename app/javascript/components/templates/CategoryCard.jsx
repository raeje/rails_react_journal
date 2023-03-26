import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteCategory, getCategories } from "../../helpers/api_helper";

const CategoryCard = ({ category, index, setCategories }) => {
  const handleDelete = async () => {
    const deleteAction = await deleteCategory(category.id);
    if (deleteAction.status === 200) {
      toast.success(deleteAction.data.message);
    }

    const data = await getCategories();
    setCategories(data.categories);
  };

  return (
    <div
      className="relative flex items-start justify-between rounded-xl border border-gray-100 p-2 shadow-xl sm:p-6 lg:p-8 w-80 h-60"
      key={"card" + index}
    >
      <div className="pt-4 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8 sm:h-10 sm:w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          {category.name}
        </h3>

        <p className="mt-2 hidden text-sm sm:block">{category.description}</p>
      </div>

      <div className="absolute top-3 right-3 w-1/6 flex items-start justify-between">
        <Link
          className="rounded-full bg-blue-100 p-1 text-xs font-medium text-blue-600 "
          to={`/category/${category.id}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </Link>
        <button
          className="rounded-full bg-red-100 p-1 text-xs font-medium text-red-600 "
          onClick={handleDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
