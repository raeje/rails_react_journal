import axios from "axios";

//const URL = process.env.JOURNAL_APP_URL;
const URL = "http://localhost:3000/api/v1";

const getCategories = async () => {
  return await axios.get(`${URL}/categories`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const getCategory = async (id) => {
  return await axios
    .get(`${URL}/categories/${id}`)
    .then((response) => response.data);
};

const createCategory = async ({ name, description }) => {
  return await axios
    .put(`${URL}/categories`, { name, description })
    .then((response) => {
      return response;
    })
    .catch((errors) => {
      return errors;
    });
};

const updateCategory = async ({ id, name, description }) => {
  return await axios
    .patch(`${URL}/categories/${id}`, { name, description })
    .then((response) => {
      return response;
    })
    .catch((errors) => {
      return errors;
    });
};

const getTasks = async (id) => {
  return await axios
    .get(`${URL}/categories/${id}/tasks`)
    .then((response) => response.data);
};

export { getCategories, getCategory, createCategory, updateCategory, getTasks };
