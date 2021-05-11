
const initialState = {
    tasks: [],
    newTaskText: '',
    changedTaskText: '',
    isFetching: false,
    editItem: false,
    editStatus: false

}

export const reducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'SET_TASKS':
            return {
                ...state,
                tasks: action.tasks
            }

        case 'DELETE_TASK':
            return {
                ...state,
                tasks: [...state.tasks.filter((task) => task.id !== action.id)]
            }

        case 'ADD_NEW_TASK': {
            return {
                ...state,
                tasks: [...state.tasks, action.task],
                newTaskText: ""
            }
        }

        case 'UPDATE_NEW_MESSAGE_TEXT': {
            return {
                ...state,
                newTaskText: action.text
            }
        }

        default:
            return state;

    }
}