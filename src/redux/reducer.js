import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './actions';
import { tasks } from './states';

export const reducer = (state = tasks, action) => {
    let newTasks
    switch (action.type) {
        case ADD_TODO:
            newTasks = [...state];
            newTasks = newTasks.push(action.payload);
            return newTasks;

        case DELETE_TODO:
            newTasks = [...state];
            newTasks = newTasks.filter(el => el.id !== action.payload);
            return newTasks;

        case EDIT_TODO:
        break;

    }
    return state;
}