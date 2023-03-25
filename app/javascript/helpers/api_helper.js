import axios from "axios";
import { setCurrentUser, getCurrentUser } from "./util";

//const URL = process.env.JOURNAL_APP_URL;
const URL = "http://localhost:3000/api/v1";

// ============================================================================
// Users
// ============================================================================
const signup = async ({ email, password, password_confirmation }) => {
  return await axios
    .put(`${URL}/signup`, { email, password, password_confirmation })
    .then((response) => {
      //console.log(response);
      return response;
    })
    .catch((errors) => {
      //console.log(errors);
      return errors.response.data;
    });
};

const login = async ({ email, password }) => {
  return await axios
    .put(`${URL}/login`, { email, password })
    .then((response) => {
      setCurrentUser(response.data);
      return response;
    })
    .catch((errors) => errors.response.data);
};

const logout = () => {
  localStorage.clear();
  return { message: "Logout successful." };
  /*
  return await axios
    .put(`${URL}/logout`, { email })
    .then((response) => {
      setCurrentUser();
      return response;
    })
    .catch((errors) => errors.response.data);
  */
};

// ============================================================================
// Categories
// ============================================================================
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
      return errors.response;
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
// ============================================================================
// Tasks
// ============================================================================
const getTasks = async (id) => {
  return await axios
    .get(`${URL}/categories/${id}/tasks`)
    .then((response) => response.data);
};

const createTask = async ({ category_id, name, description }) => {
  return await axios
    .put(`${URL}/categories/${category_id}/tasks`, {
      category_id,
      name,
      description,
    })
    .then((response) => response.data);
};

const updateTask = async ({ category_id, id, name, description }) => {
  return await axios
    .patch(`${URL}/categories/${category_id}/tasks/${id}`, {
      category_id,
      name,
      description,
      id,
    })
    .then((response) => response.data);
};

export {
  signup,
  login,
  logout,
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  getTasks,
  createTask,
  updateTask,
};
