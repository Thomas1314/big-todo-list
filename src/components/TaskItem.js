import React, { useState } from "react";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';
import { Delete, Build } from "@material-ui/icons";
import { Input } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { actions,
         deleteTask,
         updateDoneHandler,
         updateTaskText,
         updateFavoriteHandler 
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

  const updateFavoriteParams = {
    isFavorite: !task.isFavorite,
    id: task.id
  }

  const updateTaskFavorite = () => {
    dispatch(updateFavoriteHandler(updateFavoriteParams))
  }

  const inputTextChanger = event => {
  const { value } = event.target;
  const text = value;
  dispatch(actions.updateEditTaskText(text));
  }

  const deleteChosenTask = () => dispatch(deleteTask(task.id));

  const enterHandler = (event) => editHandleEnter(event, updateTaskParams);
    debugger
    return (
    <Grid item xs={12}>
      <Paper elevation={2} style={styles.Paper}>

        <Checkbox onClick={updateCategoryHandler} />
        {task.isEdit
                ? <TextField
                  value={changedTaskText}
                  onChange={inputTextChanger}
                  key={task.id + 1}
                  onKeyPress={enterHandler}
                  />
                : isEditStatus
                  ? (<span>{task.title}</span>)
                  : (<span onClick={changeTaskHandler}>{task.title}</span>) 
            }
          <IconButton
            color="primary"
            aria-label="Edit"
            style={styles.Icon}
            >
             {/* <Build fontSize="small" /> */}
          </IconButton>

          <IconButton className='material-icons' onClick={updateTaskFavorite}>
            {task.isFavorite ? "star" : "star_border" }
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