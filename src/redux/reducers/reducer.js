
const initialState = {
    tasks: [],
    newTaskText: "",
    changedTaskText: "",
    isFetching: false,
    editItem: false,
    editStatus: false,
    isEditStatus: false,
    categories: [],
    categoryID: null,
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

        case 'SET_CATEGORY':
            return {
                ...state,
                categoiyID: action.id
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

        case 'CHANGE_FAVORITE_STATUS': {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.id
                ? { ...task, isFavorite: !task.isFavorite }
                : task
                ).sort((a) => a.isFavorite ? -1 : 1)
            };
        }

        case 'SET_UNIC_CATEGORIES': {
            return {
                ...state,
                categories: action.categories
            }
        }

        case 'CHANGE_TASK_STATUS': {
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.id 
                ? {...task, isDone: !task.isDone }
                : task
                ).filter(task => task.isDone === action.isListDone)
            };
        }

        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state;

    }
}