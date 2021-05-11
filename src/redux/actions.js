import API from '../api/api';


export const actions = {
    setTasks: (tasks) => ({ type: 'SET_TASKS', tasks }),
    toggleIsFetching: (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching }),
    deleteTaskAC: (id) => ({ type: 'DELETE_TASK', id }),
    addNewTask: (task) => ({ type: 'ADD_NEW_TASK', task }),
    updateNewMessageText: (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text })
}


export const getTasks = (params) => async (dispatch) => {
    const response = await API.getTasks(params);
    dispatch(actions.setTasks(response));
}

export const deleteTask = (id) => async (dispatch) => {
    await API.deleteTask(id);
    dispatch(actions.deleteTaskAC(id));
}

export const addTask = (title, isDone, isEdit) => async (dispatch) => {
    debugger;
    const response = await API.addTask(title, isDone, isEdit);
    dispatch(actions.addNewTask(response.data));
}









