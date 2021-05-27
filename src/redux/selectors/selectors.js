export const getTasksFromState = (state) => state.doneTasks;
export const getDoneTasksFromState = (state) => state.unDoneTasks;

export const getNewTaskText = (state) => state.newTaskText;

export const getChangedTaskText = (state) => state.changedTaskText;
export const getChangedCategoryText = (state) => state.changedCategoryText;
export const getCategoriesFromState = (state) => state.categories;
export const getIsFetching = (state) => state.isFetching;
export const selectDefaultCategoryID = (state) => state.categoryID;
export const getCategoriesName = (state) => state.categoriesName;
export const getEndNumber = (state) => state.endNumber;
