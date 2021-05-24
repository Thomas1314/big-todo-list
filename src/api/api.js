import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/',
});

const limit = 50;

export const API = {
  getTasks: (url) => {
    instance.get(`${url}`).then((response) => response.data);
  },

  deleteTask(id) {
    return instance.delete(`/tasks/${id}`);
  },

  addTask: (newTaskParams) => {
    return instance.post('/tasks/', newTaskParams);
  },

  updateTask: (updateTaskParams) => {
    return instance.patch(`/tasks/${updateTaskParams.id}`, {
      title: updateTaskParams.title,
      isDone: updateTaskParams.isDone,
      isFavorite: updateTaskParams.isFavorite,
    });
  },

  updateCategoryText: (updateCategoryParams) => {
    instance.patch(`/categories/${updateCategoryParams.id}`, {
      name: updateCategoryParams.name,
    });
  },

  getCategories: () => {
    instance.get('/categories').then((response) => response.data.id);
  },

  getDefaultCategory: () => {
    instance.get('/defaultCategory').then((response) => response.data.id);
  },

  deleteCategory: (id) => instance.delete(`/categories/${id}`),

  updateCategory: ({ id, icon, color }) => {
    instance.patch(`/categories/${id}`, { icon, color });
  },

  updateDefaultCategory: (id) => {
    instance.put('/defaultCategory', { id });
  },

  addCategory: (newCategoryParams) =>
    instance.post('/categories', newCategoryParams),
};

export default API;
