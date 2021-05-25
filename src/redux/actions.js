import { API } from '../api/api';

export const actions = {
  updateNewMessageText: (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text }),

  updateEditTaskText: (text) => ({ type: 'UPDATE_EDIT_TASK_TEXT', text }),

  updateEditCategoryText: (text) => ({
    type: 'UPDATE_EDIT_CATEGORY_TEXT',
    text,
  }),

  updateCategoryText: (text) => ({ type: 'UPDATE_CATEGORY_TEXT', text }),

  editTaskText: (updateTaskParams) => ({
    type: 'EDIT_TASK_TEXT',
    updateTaskParams,
  }),

  editCategoryText: (updateCategoryParams) => ({
    type: 'EDIT_CATEGORY_TEXT',
    updateCategoryParams,
  }),

  deleteTask: (id) => ({ type: 'DELETE_TASK', id }),

  deleteCategory: (id) => ({ type: 'DELETE_CATEGORY', id }),

  changeTaskStatus: (id, isListDone) => ({
    type: 'CHANGE_TASK_STATUS',
    id,
    isListDone,
  }),

  changeFavoriteStatus: (id) => ({ type: 'CHANGE_FAVORITE_STATUS', id }),

  editCategoryIcon: (UpdateCategoryParams) => ({
    type: 'EDIT_CATEGORY_ICON',
    UpdateCategoryParams,
  }),

  addNewTask: (task) => ({ type: 'ADD_NEW_TASK', task }),

  addNewCategory: (category) => ({ type: 'ADD_NEW_CATEGORY', category }),

  changeHandler: (id) => ({ type: 'CHANGE_HANDLER', id }),

  changeCategoryHandler: (id) => ({ type: 'CHANGE_CATEGORY_HANDLER', id }),

  setTasks: (tasks) => ({ type: 'SET_TASKS', tasks }),

  setDoneTasks: (tasks) => ({ type: 'SET_DONE_TASKS', tasks }),

  setUnicCategories: (categories) => ({
    type: 'SET_UNIC_CATEGORIES',
    categories,
  }),

  setCategory: (id) => ({ type: 'SET_CATEGORY', id }),

  toggleIsFetching: (isFetching) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching,
  }),
};

export const getTasks = (params) => async (dispatch) => {
  const response = await API.getTasks(params);
  params.isListDone
    ? dispatch(actions.setTasks(response))
    : dispatch(actions.setDoneTasks(response));
};

export const getCategories = () => async (dispatch) => {
  const response = await API.getCategories();
  dispatch(actions.setUnicCategories(response));
};

export const getDefaultCategory = () => async (dispatch) => {
  const response = await API.getDefaultCategory();
  dispatch(actions.setCategory(response));
};

export const updateDefaultCategory = (id) => async (dispatch) => {
  await API.updateDefaultCategory(id);
  dispatch(actions.setCategory(id));
};

export const deleteTask = (id) => async (dispatch) => {
  await API.deleteTask(id);
  dispatch(actions.deleteTaskAC(id));
};

export const deleteCategory = (id) => async (dispatch) => {
  await API.deleteCategory(id);
  dispatch(actions.deleteCategory(id));
};

export const addTask = (newTaskParams) => async (dispatch) => {
  const response = await API.addTask(newTaskParams);
  dispatch(actions.addNewTask(response.data));
};

export const addCategory = (newCategoryParams) => async (dispatch) => {
  const response = await API.addCategory(newCategoryParams);
  dispatch(actions.addNewCategory(response.data));
};

export const updateTask = (updateTaskParams) => async (dispatch) => {
  await API.updateTask(updateTaskParams);
};

export const updateCategoryText =
  (updateCategoryParams) => async (dispatch) => {
    await API.updateCategoryText(updateCategoryParams);
    dispatch(actions.editCategoryText(updateCategoryParams));
  };

export const updateCategory = (updateCategoryParams) => async (dispatch) => {
  await API.updateCategory(updateCategoryParams);
  dispatch(actions.editCategoryIcon(updateCategory));
};
