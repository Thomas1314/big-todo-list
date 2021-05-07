import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants';


const initialState = {
    tasks: [],
    newTaskText: '',
    isFetching: false
}

export const reducer = (state, action) => {
    //debugger
    let newTasks
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_TODO:
            newTasks = [...state];
            newTasks = newTasks.filter(el => el.id !== action.payload);
            return newTasks;

        case EDIT_TODO:
            newTasks = [...state];
            let index = -1;
            for (let i = 0; i < newTasks.length; i++) {
                index++;
                if (newTasks[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTasks[index] = action.payload;
                return newTasks;
            }

    }
    return state;
}