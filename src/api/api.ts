import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/" /* `${process.env.REACT_APP_URL}` */,
});

const limit = 50;

export type Colors = "yellowgreen" | "yellow" | "black" | "";
export type Icons = "acnchor" | "home" | "thumb_up" | "";

export const API = {
  getTasks: (params) => {
    instance
      .get(
        `tasks?date_gte=${params.dateFrom}&date_lte=${params.dateTo}&${params.searchString}&isDone=${params.isListDone}&_start=0&_end=${params.end}&_limit=${limit}`
      )
      .then((response) => response.data);
  },

  deleteTask(id) {
    instance.delete(`/tasks/${id}`);
  },

  addTask: (NewTaskParams) => instance.post("/tasks/", NewTaskParams),

  updateTask: (updateTaskParams) => {
    instance.patch(`/tasks/${updateTaskParams.id}`, {
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

  getCategories: () =>
    instance.get("/categories").then((response) => response.data),

  getDefaultCategory: () =>
    instance.get("/defaultCategory").then((response) => response.data.id),

  deleteCategory: (id) => instance.delete(`/categories/${id}`),

  updateCategory: ({ id, icon, color }) => {
    instance.patch(`/categories/${id}`, { icon, color });
  },

  updateDefaultCategory: (id) => {
    instance.put("/defaultCategory", { id });
  },

  addCategory: (newCategoryParams) =>
    instance.post("/categories", newCategoryParams),
};
