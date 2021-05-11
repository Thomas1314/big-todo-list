import React, { useState } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { addTask, actions } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ListHook from '../hooks/ListHook';
import { getNewTaskText } from '../redux/selectors/selectors';

 const TodoInput = () => {
     const newTaskText = useSelector(getNewTaskText);
     const { dispatch } = ListHook();

     const inputChange = event => {
        const { value } = event.target;
        const text = value;
        dispatch(actions.updateNewMessageText(text));
     }

     //debugger;
     return (
        <div /* onSubmit={handleSubmit} */ className='todo_form'>
            <Input
            value={newTaskText}
            onChange={inputChange}
            placeholder='Todo'
            style={{ width: "90%" }}
            />

            <Button 
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "10%" }}
            onClick={() => {
                //debugger
                dispatch(addTask({
                    title: newTaskText,
                    isDone: false,
                    isEdit: false
                }))}
            }
    
            >
                Add
            </Button>
        </div>
    );
 }


export default TodoInput;