
const initialState = {
    doneTasks: [],
    unDoneTasks: [],
    /* tasks: [], */
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
                doneTasks: action.tasks
            }

        /* case 'SET_CATEGORY':
            return {
                ...state,
                categoiyID: action.id
            } */

        case 'DELETE_TASK':
            return {
                ...state,
                doneTasks: [...state.doneTasks.filter((task) => task.id !== action.id)],
                unDoneTasks: [...state.unDoneTasks.filter((task) => task.id !== action.id)]
            }

        case 'ADD_NEW_TASK': {
            return {
                ...state,
                unDoneTasks: [...state.unDoneTasks, action.task],
                newTaskText: ""

                /* ...state,
                tasks: [...state.tasks, action.task],
                newTaskText: "" */
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

        case 'EDIT_TASK_TEXT': {
            return {
                ...state,
                unDoneTasks: state.unDoneTasks.map((task) =>
                    task.id === action.updateTaskParams.id
                        ? {
                            ...task,
                            title: action.updateTaskParams.title,
                            isEdit: !task.isEdit
                          }
                        : task 
                )
            };
        }

        case 'CHANGE_HANDLER': {
            return {
                ...state,
                unDoneTasks: state.unDoneTasks.map((task) =>
                    task.id === action.id ? { ...task, isEdit: !task.isEdit } : { ...task, isEdit: false }
                ),

                changedTaskText: state.unDoneTasks.find((task) => task.id === action.id)
                    .title 
            }
        }

        /* case 'SET_UNIC_CATEGORIES': {
            return {
                ...state,
                categories: action.categories
            }
        } */

        case 'CHANGE_TASK_STATUS': {
            return action.isListDone ? 
            {
                ...state,
                doneTasks: state.doneTasks.map((task) =>
                task.id === action.id ? { ...task, isDone: !task.isDone } : task
                )
            } 
            : 
            {
                ...state,
                unDoneTasks: state.unDoneTasks.map((task) =>
                task.id === action.id ? { ...task, isDone: !task.isDone } : task
                )
            }
        }

        case 'CHANGE_FAVORITE_STATUS': {
            return {
                ...state,
                doneTasks: state.doneTasks.map((task) => task.id === action.id
                    ? { ...task, isFavorite: !task.isFavorite }
                    : task
                ),

                unDoneTasks: state.unDoneTasks.map((task) => task.id === action.id
                    ? { ...task, isFavorite: !task.isFavorite }
                    : task
                )
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