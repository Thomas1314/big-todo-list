import { SET_TASKS, 
    ADD_TASK, 
    DELETE_TASK, 
    EDIT_TASK_TEXT,
    TOGGLE_IS_FETCHING
 } from './types';
import API from '../api/api';


export const actions = {
    setTasks: (tasks) => ({ type: SET_TASKS, tasks }),
    toggleIsFetching: (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching }),
    deleteTask: (id) => ({ type: DELETE_TASK, id })
}


export const getTasks = (params) => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    const res = await API.getTasks(params);
    dispatch(actions.setTasks(res));
}







