import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/tasks'   /* `${process.env.REACT_APP_URL}` */
})

export const API = {
      getTasks: () => {
        instance
          .get(`/tasks`)
            .then((response) => response.data)
      },

      deleteTask(id) {
        return instance.delete(`/tasks/${id}`);
      },

      addTask: (title, isDone, isEdit) => {
        return instance.post(`/tasks/`, {
          title,
          isDone,
          isEdit
        })
      }
}

export default API;
