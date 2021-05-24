
const initialState = {
    doneTasks: [],
    unDoneTasks: [],
    newTaskText: "",
    changedTaskText: "",
    changedCategoryText: "",
    isFetching: false,
    editItem: false,
    categories: [],
    categoryID: null,
    categoriesName: ""
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_TASKS':
            return {
                ...state,
                doneTasks: action.tasks
            }

        case 'SET_CATEGORY':
            return {
                ...state,
                categoiyID: action.id
            }

        case 'DELETE_TASK':
            return {
                ...state,
                doneTasks: [...state.doneTasks.filter((task) => task.id !== action.id)],
                unDoneTasks: [...state.unDoneTasks.filter((task) => task.id !== action.id)]
            }

        case 'DELETE_CATEGORY':
            return {
                ...state,
                categories: [
                    ...state.categories.filter((category) => category.id !== action.id)
                ]
            }

        case 'ADD_NEW_TASK': {
            return {
                ...state,
                unDoneTasks: [...state.unDoneTasks, action.task],
                newTaskText: ""
            }
        }

        case 'ADD_NEW_CATEGORY': {
            return {
                ...state,
                categories: [...state.categories, action.category],
                categoriesName: ""
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

        case 'UPDATE_CATEGORY_TEXT': {
            return {
                ...state,
                categoriesName: action.text
            }
        }

        case 'UPDATE_EDIT_CATEGORY_TEXT': {
            return {
                ...state,
                changedCategoryText: action.text
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

        case 'CHANGE_CATEGORY_HANDLER': {
            return {
                ...state,
                categories: state.categories.map((category) => 
                    category.id === action.id ? { ...category, isEdit: !category.isEdit} : { ...category, isEdit: false }
                ),

                changedCategoryText: state.categories.find((categories) => categories.id === action.id)
                    .name
            }
        }

        case 'SET_UNIC_CATEGORIES': {
            return {
                ...state,
                categories: action.categories
            }
        }

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