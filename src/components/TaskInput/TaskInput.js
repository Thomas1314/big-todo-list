import React, { useEffect, useState } from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import { addTask, actions } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ListHook from '../../hooks/ListHook';
import { getCategoriesFromState, getNewTaskText, selectDefaultCategoryID } from '../../redux/selectors/selectors';
import { Select } from '@material-ui/core';
import { Icon } from '../Icon/icon';




 const TaskInput = () => {
    
    const newTaskText = useSelector(getNewTaskText);
     const categories = useSelector(getCategoriesFromState);
     const categoryID = useSelector(selectDefaultCategoryID);
     const [open, setOpen] = useState(false);
     const [category, setCategory] = useState(categoryID);
     const [taskDate, setTaskDate] = useState(new Date(Date.now()));
     const dispatch = useDispatch();

     useEffect(() => {
         setCategory(categoryID);
     }, [categoryID]); 

     const onOpen = () => {
         setOpen(true);
     }

     const onClose = () => {
         setOpen(false);
     }

     const newTaskParams = {
         title: newTaskText,
         isDone: false,
         isEdit: false,
         categoryID: categoryID,
         isFavorite: false,
         date: taskDate.valueOf()
     }
                   
     const addHandleEnter = (event) => {
         if (newTaskText && newTaskText.length < 30 && event.key === 'Enter') {
             dispatch(addTask(newTaskParams)                                                                                         )
         }
     }

     const inputChange = event => {
        const { value } = event.target;
        const text = value;
        dispatch(actions.updateNewMessageText(text));
     }

     const handleChangeCategory = (event) => {
         dispatch(actions.setCategory(event.target.value));
     }

     //debugger;
     return (
        <div className='todo_form'>
            <Input
            value={newTaskText}
            onChange={inputChange}
            onKeyPress={addHandleEnter}
            placeholder='Todo'
            style={{ width: "90%" }}
            />
        
            <Select onOpen={onOpen}
                    onClose={onClose}
                    onChange={handleChangeCategory}
                    value={category}
            >
                    {/* {
                        categories.map(({ id, color, icon, name}) => (
                            <MenuItem key={id} value={id}>
                                <>
                                    <Icon color={color} icon={icon} />
                                    {open && name}
                                </>
    
                            </MenuItem>
                        ))
                    } */}
            </Select>

            <Button 
            type="submit"
            disabled={newTaskText.length === 0 || newTaskText.length > 30}
            variant="contained"
            color="primary"
            style={{ width: "10%" }}
            onClick={() => {
                newTaskText && newTaskText.length < 10 && dispatch(addTask(newTaskParams));
            }}
            >
                Add
            </Button>
        </div>
    );
 }


export default TaskInput;