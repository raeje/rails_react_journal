import React, { useRef } from "react";
import { getCategories, createCategory } from "../../helpers/api_helper";
import { toast } from "react-toastify";

const CategoryForm = ({ setCategories }) => {
  const name = useRef("");
  const description = useRef("");

  const labelClassName = "font-bold text-gray-900 text-sm";
  const inputClassName = "border-none focus:border-b-2 mb-2 w-full py-1 px-2";

  const handleCreate = async () => {
    const createAction = await createCategory({
      name: name.current.value,
      description: description.current.value,
    });

    if (createAction.status === 201) {
      toast.success(createAction.data.message);
      name.current.value = "";
      description.current.value = "";
    } else {
      Object.keys(createAction.errors).forEach((key) => {
        toast.error(`${key.toUpperCase()} ${createAction.errors[key]}.`);
      });
    }

    const categories = await getCategories();
    setCategories(categories.categories);
    return createAction;
  };

  handleNameChange = (e) => {
    name.current.value = e.target.value;
  };

  handleDescriptionChange = (e) => {
    description.current.value = e.target.value;
  };

  return (
    <div
      className="relative flex items-start justify-between rounded-xl border border-green-400 p-2 shadow-xl sm:p-2 lg:py-0.5 lg:px-8 w-80 h-full row-span-2"
      key="new-card"
    >
      <div className="pt-2 text-gray-500">
        <label labelfor="new-category-name" className={labelClassName}>
          Category
        </label>
        <input
          type="text"
          className={`text-gray-500 sm:text-xl ${inputClassName}`}
          placeholder="Name"
          id="new-category-name"
          ref={name}
          onChange={(e) => {
            handleNameChange(e);
          }}
        />

        <label labelfor="new-category-description" className={labelClassName}>
          Description
        </label>
        <input
          type="text"
          className={`hidden text-sm sm:block ${inputClassName}`}
          placeholder="Short description"
          id="new-category-description"
          ref={description}
          onChange={(e) => {
            handleDescriptionChange(e);
          }}
        />

        <button
          className="rounded-full font-bold w-full mt-4 bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-200"
          onClick={handleCreate}
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default CategoryForm;
