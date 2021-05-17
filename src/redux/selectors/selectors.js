

/* export const getTasksFromState = (state) => state.tasks; */
export const getTasksFromState = (state) => state.unDoneTasks;
export const getDoneTasksFromState = (state) => state.doneTasks;

export const getNewTaskText = (state) => state.newTaskText;
export const getChangedTaskText = (state) => state.changedTaskText;
export const getCategoriesFromState = (state) => state.categories;
export const getIsFetching = (state) => state.isFetching;
export const selectDefaultCategoryID = (state) => state.categoryID;