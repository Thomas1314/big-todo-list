import React, { useState } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { addTask, actions } from '../redux/actions';
import { useSelector } from 'react-redux';
import ListHook from '../hooks/ListHook';
import { getNewTaskText } from '../redux/selectors/selectors';
import { Select } from '@material-ui/core';
import API from '../api/api';

 const TaskInput = () => {
     const [open, setOpen] = useState(false);
     const [input, setInput] = useState('');
     const newTaskText = useSelector(getNewTaskText);
     const { dispatch } = ListHook();

     const onOpen = () => {
         setOpen(true);
     }

     const onClose = () => {
         setOpen(false);
     }

      /* const addTodo = async (e) => {
          e.preventDefault();                  
          if (input) {
              const todoToAdd = {
                  title: `${input}`,
                  isDone: false,
                  isEdit: false                                                                                                                                 
              };
              await API.addTask('task', itemToAdd);
              const response = await API.getTasks()
          }
      } */

     const inputChange = event => {
        const { value } = event.target;
        const text = value;
        dispatch(actions.updateNewMessageText(text));
     }

     //debugger;
     return (
        <div className='todo_form'>
            <Input
            value={newTaskText}
            onChange={inputChange}
            placeholder='Todo'
            style={{ width: "90%" }}
            />
            <Select onOpen={onOpen}
                    onClose={onClose}
            >

            </Select>

            <Button 
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "10%" }}
            onClick={() => dispatch(addTask({
                title: newTaskText,
                isDone: false,
                isEdit: false,
            }))}
            >
                Add
            </Button>
        </div>
    );
 }


export default TaskInput;