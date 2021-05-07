import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_URL
})

const limit = process.env.REACT_TASKS_LIMIT

export const API = {
      getTasks: () => {
          instance
          .get()
          .then((response) => response.data)
      },

      deleteTask(id) {
        return instance.delete(`/tasks/${id}`);
      },

      addTask: () => {
        instance.post(`/tasks/`)
      }
}
