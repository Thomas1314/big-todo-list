
const initialState = {
    tasks: [],
    newTaskText: "",
    changedTaskText: "",
    isFetching: false,
    editItem: false,
    editStatus: false,
    isEditStatus: false,
    categories: [],
    categoiyID: null,
    categoriesName: ""
}

export const reducer = (state = initialState, action) => {
    //debugger
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

        case 'UPDATE_EDIT_TASK_TEXT': {
            return {
                ...state,
                changedTaskText: action.text
            }
        }

        case 'UPDATE_IS_EDIT': {
            return {
                ...state,
                isEditStatus: !state.isEditStatus
            }
        }

        case 'EDIT_TASK_TEXT': {
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.id
                        ? {
                            ...task,
                            title: action.title,
                            isEdit: !task.isEdit
                          }
                        : task 
                )
            };
        }

        case 'CHANGE_HANDLER': {
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.id ? { ...task, isEdit: !task.isEdit } : task
                ),

                changedTaskText: state.tasks.filter((task) => task.id === action.id) 
            }
        }

        default:
            return state;

    }
}