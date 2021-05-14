import API from '../api/api';


export const actions = {
    setTasks: (tasks) => ({ type: 'SET_TASKS', tasks }),

    setCategory: (id) => ({ type: 'SET_CATEGORY', id }),

    changeHandler: (id) => ({ type: 'CHANGE_HANDLER', id }),

    toggleIsFetching: (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching }),

    deleteTaskAC: (id) => ({ type: 'DELETE_TASK', id }),

    addNewTask: (task) => ({ type: 'ADD_NEW_TASK', task }),

    updateNewMessageText: (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text }),

    updateEditTaskText: (text) => ({ type: 'UPDATE_EDIT_TASK_TEXT', text}),

    updateIsEditStatus: () => ({ type: 'UPDATE_IS_EDIT'}),

    editTaskText: (updateTaskParams) => ({ type: 'EDIT_TASK_TEXT', updateTaskParams }),

    changeTaskStatus: (id, isListDone) => ({ type: 'CHANGE_TASK_STATUS', id, isListDone }),

    changeFavoriteStatus: (id) => ({ type: 'CHANGE_FAVORITE_STATUS', id }),

    setUnicCategories: (categories) => ({ type: 'SET_UNIC_CATEGORIES', categories }),

    editCategoryIcon: (updateCategoryParams) => ({ type: 'EDIT_CATEGORY_ICON', updateCategoryParams })

}


export const getTasks = (params) => async (dispatch) => {
    const response = await API.getTasks(params);
    dispatch(actions.setTasks(response));
}

export const deleteTask = (id) => async (dispatch) => {
    await API.deleteTask(id);
    dispatch(actions.deleteTaskAC(id));
}

export const addTask = (newTaskParams) => async (dispatch) => {
    const response = await API.addTask(newTaskParams);
    dispatch(actions.addNewTask(response.data));
}

export const updateTaskText = (updateTaskParams) => async (dispatch) => {
    await API.updateTask(updateTaskParams);
    dispatch(actions.editTaskText(updateTaskParams));
}

export const updateDoneHandler = (updateDone) => async (dispatch) => {
    await API.updateDoneHandler(updateDone);
    dispatch(actions.changeTaskStatus(updateDone.id, updateDone.isListDone));
}

export const getCategories = () => async (dispatch) => {
    const response = await API.getCategories();
    dispatch(actions.setUnicCategories);
}

export const getDefaultCategory = () => async (dispatch) => {
    const response = await API.getDefaultCategory();
    dispatch(actions.setCategory(response));
}

export const updateFavoriteHandler = (updateFavoriteParams) => async (dispatch) => {
    await API.updateFavoriteHandler(updateFavoriteParams);
    dispatch(actions.changeFavoriteStatus(updateFavoriteParams.id));
}

export const updateCategory = (updateCategoryParams) => async (dispatch) => {
    await API.updateCategory(updateCategoryParams);
    dispatch(actions.editCategoryIcon(updateCategory));
}












