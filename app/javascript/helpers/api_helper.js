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

const getTasks = async (id) => {
  return await axios
    .get(`${URL}/categories/${id}/tasks`)
    .then((response) => response.data);
};

export { getCategories, getCategory, getTasks };
