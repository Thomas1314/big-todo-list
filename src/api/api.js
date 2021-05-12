import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'   /* `${process.env.REACT_APP_URL}` */
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

      addTask: (itemToAdd) => {
        return instance.post(`/tasks/`, itemToAdd)
      },

      updateTask: (id, title) => {
        const response = instance.patch(`/tasks/${id}`, { title: title });
        const { data } = response;
        return data;
      },
      
      updateDoneHandler: (id, isDone ) => {
         instance.patch(`/tasks/${id}`, { isDone: isDone });
      }
}

export default API;
