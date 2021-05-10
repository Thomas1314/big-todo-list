import { SET_TASKS, ADD_TASK, DELETE_TASK, EDIT_TASK_TEXT } from '../types';


const initialState = {
    tasks: [],
    newTaskText: '',
    changedTaskText: '',
    isFetching: false,
    editItem: false,

}

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter((task) => task.id !== action.id)]
            }

        default:
            return state;

    }
}