import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/tasks'   /* `${process.env.REACT_APP_URL}` */
})


/* const limit = process.env.REACT_TASKS_LIMIT */


export const API = {
      getTasks: () => {
        instance
          .get()
            .then((response) => response.data)
      },

      deleteTask(id) {
        return instance.delete(`/tasks/${id}`);
      },

      addTask: (title, done, editHandler) => {
        return instance.post(`/tasks/`, {
          title,
          done,
          editHandler
        })
      }
}

export default API;
