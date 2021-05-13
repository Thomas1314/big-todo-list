import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'  
})


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
        /* const response = */ instance.patch(`/tasks/${updateTaskParams.id}`, { title: updateTaskParams.title });
        /* const { data } = response;
        return data; */
      },
      
      updateDoneHandler: (updateDone) => {
         instance.patch(`/tasks/${updateDone.id}`, { isDone: updateDone.isDone });
      },

      getCategories: () => {
        instance.get("/categories")
        .then((response) => response.data.id);
      },

      getDefaultCategory: () => {
        instance.get("/defaultCategories")
        .then((response) => response.data.id);
      },

      deleteCategory: (id) => {
        instance.delete(`/defaultCategory`, { id });
      },

      updateFavoriteHandler: (updateFavoriteParams) => {
        instance.patch(`/tasks/${updateFavoriteParams.id}`, { isFavorite: updateFavoriteParams.isFavorite});
      }
}

export default API;
