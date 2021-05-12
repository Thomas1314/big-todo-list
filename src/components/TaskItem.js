import React, { useState } from "react";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Build } from "@material-ui/icons";
import { Input } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { actions,
         deleteTask,
         updateDoneHandler,
         updateTaskText 
} from "../redux/actions";
import { getChangedTaskText, getIsEditStatus } from '../redux/selectors/selectors';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    Icon: {
      marginLeft: "auto"
    },
    Paper: {
      margin: "auto",
      padding: 10,
      display: "flex",
      alignItems: "center",
      marginTop: 10,
      width: 500
    }
  };


const TaskItem = ({ task, categories, isListDone }) => {
/*const [edit, setEdit] = useState(false);
  const [name, setName] = useState(task.title); */

  const dispatch = useDispatch();

  const changedTaskText = useSelector(getChangedTaskText);
  const isEditStatus = useSelector(getIsEditStatus);

  const changeTaskHandler = () => {
    dispatch(actions.changeHandler);
    dispatch(actions.updateIsEditStatus())
  }

  const updateTaskParams = {
    title: changedTaskText,
    id: task.id
  };

    const editHandleEnter = (event, updateTaskParams) => {
    if (event.key === 'Enter') {
      dispatch(updateTaskText(updateTaskParams));
      dispatch(actions.updateIsEditStatus());
    }
  }

  const updateDone = {
    isDone: !task.isDone,
    id: task.id,
    isListDone: isListDone
  };

  const updateCategoryHandler = () => {
    dispatch(updateDoneHandler(updateDone));
  }

  const inputTextChanger = event => {
  const { value } = event.target;
  const text = value;
  dispatch(actions.updateEditTaskText(text));
  }

  const deleteChosenTask = () => dispatch(deleteTask(task.id));
    
    return (
    <Grid item xs={12}>
      <Paper elevation={2} style={styles.Paper}>
        <Checkbox onClick={updateCategoryHandler} />
        {task.isEdit 
        ? <Input type='text' value={changedTaskText} onChange={(inputTextChanger)} /> 
        : <span style={styles.Todo}>{task.title}</span>
        }
        
           <IconButton
            /* onClick={() => {
                dispatch(editTodo({
                  ...todo,
                  title: name
              }))
              if (edit) {
               setName(todo.title);   
              }
              setEdit(!edit);
            */            
            color="primary"
            aria-label="Edit"
            style={styles.Icon}
            >
            {/* {task.isEdit
                ? <TextField
                  value={changedTaskText}
                  onChange={inputTextChanger}
                  key={task.id + 1}
                  />
                : isEditStatus
                  ? (<span>{task.title}</span>)
                  : (<span onClick={changeTaskHandler}>{task.title}</span>) 
            } */}
            {task.isEdit ? <Button variant="contained">Update</Button> : <Build fontSize="small" />}
            {/* <Build fontSize="small" /> */}
          </IconButton>
        
          <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={deleteChosenTask}
          >
            <Delete fontSize="small" />
          </IconButton>

      </Paper>
    </Grid>
    )
}

export default TaskItem;