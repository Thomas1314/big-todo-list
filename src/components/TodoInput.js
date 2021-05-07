import React, { useState } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { addTodo } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

 const TodoInput = () => {
     const [value, setValue] = useState();
     let dispatch = useDispatch();

     let todos = useSelector(state => state);

     const inputChange = event => {
        setValue(event.target.value);
     }

     const handleSubmit = event => {
         event.preventDefault();
         if (!value) return;
         dispatch(addTodo(value))

     }


     //debugger;
     return (
        <form onSubmit={handleSubmit} className='todo_form'>
            <Input
            value={value}
            onChange={inputChange}
            placeholder='Todo'
            style={{ width: "90%" }}
            />

            <Button 
             onClick={() => {
                 dispatch(addTodo({
                    id: todos.length + 1,
                    title: value,
                    done: false
                 }));
                 setValue('');
                 
                }}
    
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "10%" }}
            >
                Add
            </Button>
        </form>
    );
 }


export default TodoInput;