import axios from "axios";
import { setCurrentUser, getCurrentUser } from "./util";

//const URL = process.env.JOURNAL_APP_URL;
//const URL = "http://localhost:3000/api/v1";
// Use render.com link for prod
const URL = "";

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
  const currentUser = getCurrentUser();
  const user_id = currentUser.id;
  const headers = { Authorization: currentUser.token, user_id };

  return await axios
    .get(`${URL}/categories`, { params: { user_id }, headers })
    .then((response) => {
      return response.data;
    });
};

const createCategory = async ({ name, description }) => {
  const currentUser = getCurrentUser();
  const user_id = currentUser.id;
  //const headers = { Authorization: `Bearer ${currentUser.token}` };

  return await axios
    .put(
      `${URL}/categories`,
      { user_id, name, description },
      { headers: { Authorization: `Bearer ${currentUser.token}` } }
    )
    .then((response) => {
      return response;
    })
    .catch((errors) => {
      return errors.response.data;
    });
};

const getCategory = async (id) => {
  const currentUser = getCurrentUser();
  const user_id = currentUser.id;
  const headers = { Authorization: currentUser.token, user_id };
  return await axios
    .get(`${URL}/categories/${id}`, { headers })
    .then((response) => response.data);
};

const updateCategory = async ({ id, name, description }) => {
  const currentUser = getCurrentUser();
  return await axios
    .patch(
      `${URL}/categories/${id}`,
      { name, description },
      { headers: { Authorization: `Bearer ${currentUser.token}` } }
    )
    .then((response) => {
      return response;
    })
    .catch((errors) => {
      return errors.response;
    });
};

const deleteCategory = async (id) => {
  const currentUser = getCurrentUser();
  return await axios
    .delete(`${URL}/categories/${id}`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
    .then((response) => response)
    .catch((errors) => errors.response);
};
// ============================================================================
// Tasks
// ============================================================================
const getTasks = async (id) => {
  const currentUser = getCurrentUser();
  const user_id = currentUser.id;
  const headers = { Authorization: currentUser.token, user_id };
  return await axios
    .get(`${URL}/categories/${id}/tasks`, { params: { id, user_id }, headers })
    .then((response) => response.data);
};

const getAllTasks = async () => {
  const currentUser = getCurrentUser();
  const user_id = currentUser.id;
  const headers = { Authorization: currentUser.token, user_id };
  return await axios
    .get(`${URL}/tasks/all`, { params: { user_id }, headers })
    .then((response) => response.data);
};

const createTask = async ({
  category_id,
  name,
  description,
  due_date,
  status,
}) => {
  const currentUser = getCurrentUser();
  const user_id = currentUser.id;
  return await axios
    .put(
      `${URL}/categories/${category_id}/tasks`,
      { user_id, category_id, name, description, due_date, status },
      { headers: { Authorization: `Bearer ${currentUser.token}` } }
    )
    .then((response) => response)
    .catch((errors) => errors.response.data);
};

const updateTask = async ({
  category_id,
  id,
  name,
  description,
  due_date,
  status,
}) => {
  const currentUser = getCurrentUser();
  const user_id = currentUser.id;
  return await axios
    .patch(
      `${URL}/categories/${category_id}/tasks/${id}`,
      {
        category_id,
        name,
        description,
        due_date,
        status,
        id,
      },
      { headers: { Authorization: `Bearer ${currentUser.token}` } }
    )
    .then((response) => response)
    .catch((errors) => errors.response.data);
};

const deleteTask = async ({ category_id, id }) => {
  const currentUser = getCurrentUser();
  return await axios
    .delete(`${URL}/categories/${category_id}/tasks/${id}`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
    .then((response) => response)
    .catch((errors) => errors.response);
};

const getDueTasksToday = async () => {
  const currentUser = getCurrentUser();
  const user_id = currentUser.id;
  const headers = { Authorization: currentUser.token, user_id };
  //{ params: { id, user_id }, headers }

  //{ user_id },
  //{ headers: { Authorization: `Bearer ${currentUser.token}` } }
  return await axios
    .get(`${URL}/tasks/due_today`, { params: { user_id }, headers })
    .then((response) => response.data)
    .catch((errors) => errors.response.data);
};

export {
  signup,
  login,
  logout,
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getTasks,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getDueTasksToday,
};
