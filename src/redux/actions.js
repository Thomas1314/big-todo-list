import API from '../api/api';


export const actions = {
    setTasks: (tasks) => ({ type: 'SET_TASKS', tasks }),

    changeHandler: (id) => ({ type: 'CHANGE_HANDLER', id }),

    toggleIsFetching: (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching }),

    deleteTaskAC: (id) => ({ type: 'DELETE_TASK', id }),

    addNewTask: (task) => ({ type: 'ADD_NEW_TASK', task }),

    updateNewMessageText: (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text }),

    updateEditTaskText: (text) => ({ type: 'UPDATE_EDIT_TASK_TEXT', text}),

    updateIsEditStatus: () => ({ type: 'UPDATE_IS_EDIT'}),

    editTaskText: (id) => ({ type: 'EDIT_TASK_TEXT', id }),

    changeTaskStatus: (id, isListDone) => ({ type: 'CHANGE_TASK_STATUS', id, isListDone})
}


export const getTasks = (params) => async (dispatch) => {
    const response = await API.getTasks(params);
    dispatch(actions.setTasks(response));
}

export const deleteTask = (id) => async (dispatch) => {
    await API.deleteTask(id);
    dispatch(actions.deleteTaskAC(id));
}

export const addTask = (itemToAdd) => async (dispatch) => {
    const response = await API.addTask(itemToAdd);
    dispatch(actions.addNewTask(response.data));
}

export const updateTaskText = (title, id) => async (dispatch) => {
    await API.updateTask(title, id);
    dispatch(actions.editTaskText(title, id));
}

export const updateDoneHandler = (updateDone) => async (dispatch) => {
    await API.updateDoneHandler(updateDone);
    dispatch(actions.changeTaskStatus(updateDone.id, updateDone.isListDone));
}












