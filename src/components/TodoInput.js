import React, { useState } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { addTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

 const TodoInput = () => {
     const [name, setName] = useState();
     let dispatch = useDispatch();


     return (
        <form className='todo_form' /* onSubmit={event => {
            event.preventDefault();
            addTodo(value);
            setValue('');
        }} */>
            <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Todo'
            style={{ width: "90%" }}
            />

            <Button 
            onClick={() => {
                dispatch(addTodo(
                    {
                        id: 34,
                        title: name                                                               
                    }
                ))
                setName('');
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