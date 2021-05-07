import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants';
import axios from 'axios';

export function addTodo(todo) {
    //debugger
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


