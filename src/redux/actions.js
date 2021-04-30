export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export function editTodo(todo) {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}

