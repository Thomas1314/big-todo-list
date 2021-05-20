import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'   /* `${process.env.REACT_APP_URL}` */
})

const limit = 50;   /* `${process.env.REACT_APP_TASK_LIMIT}` */


export const API = {
      getTasks: (url) => {
        instance
          .get(`${url}`)
            .then((response) => response.data)
      },

      deleteTask(id) {
        return instance.delete(`/tasks/${id}`);
      },

      addTask: (newTaskParams) => {
        return instance.post(`/tasks/`, newTaskParams)
      },

      updateTask: (updateTaskParams) => {
        instance.patch(`/tasks/${updateTaskParams.id}`, {
          title: updateTaskParams.title,
          isDone: updateTaskParams.isDone,
          isFavorite: updateTaskParams.isFavorite          
        });
      },

      updateCategoryText: (updateCategoryParams) => {
        instance.patch(`/categories/${updateCategoryParams.id}`, { name: updateCategoryParams.name });
      },

      getCategories: () => {
        instance.get(`/categories`)
        .then((response) => response.data.id);
      },

      getDefaultCategory: () => {
        instance.get(`/defaultCategory`)
        .then((response) => response.data.id);
      },

      deleteCategory: (id) => {
        instance.delete(`/categories/${id}`);
      },

      updateCategory: ({ id, icon, color}) => {
        instance.patch(`/categories/${id}`, { icon, color });
      },

      updateDefaultCategory: (id) => {
        instance.put(`/defaultCategory`, { id });
      }
}

export default API;
