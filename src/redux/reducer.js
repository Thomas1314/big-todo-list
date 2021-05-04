import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './actions';
import { tasks } from './states';

export const reducer = (state = tasks, action) => {
    debugger
    let newTasks
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_TODO:
            newTasks = [...state];
            newTasks = newTasks.filter(el => el.id !== action.payload);
            return newTasks;

        case EDIT_TODO:
        break;

    }
    return state;
}