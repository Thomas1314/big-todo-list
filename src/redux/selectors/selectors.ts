import { AppStateType } from '../store';

export const getTasksFromState = (state: AppStateType) => state.unDoneTasks;
export const getDoneTasksFromState = (state: AppStateType) => state.doneTasks;

export const getNewTaskText = (state: AppStateType) => state.newTaskText;

export const getChangedTaskText = (state: AppStateType) =>
  state.changedTaskText;
export const getChangedCategoryText = (state: AppStateType) =>
  state.changedCategoryText;
export const getCategoriesFromState = (state: AppStateType) => state.categories;
export const getIsFetching = (state: AppStateType) => state.isFetching;
export const selectDefaultCategoryId = (state: AppStateType) =>
  state.categoryId;
export const getCategoriesName = (state: AppStateType) => state.categoriesName;
export const getEndNumber = (state: AppStateType) => state.endNumber;
