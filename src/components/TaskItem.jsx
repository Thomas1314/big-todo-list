import React from 'react';
import { Grid, Paper, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Delete } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actions, deleteTask, updateTask } from '../redux/actions';
import { getChangedTaskText } from '../redux/selectors/selectors';
import Checkbox from '@material-ui/core/Checkbox';
import { StyledButton } from './TaskButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStyles } from './TaskItem.styles';

const styles = {
  Icon: {
    marginLeft: 'auto',
  },
  Paper: {
    margin: 'auto',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    width: 500,
  },
};

const TaskItem = ({ task, categories, isListDone }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const changedTaskText = useSelector(getChangedTaskText);

  const updateTextParams = {
    title: changedTaskText,
    id: task.id,
  };

  const editHandleEnter = (event) => {
    if (event.key === 'Enter') {
      dispatch(
        updateTask({
          isFavorite: task.isFavorite,
          id: task.id,
          isDone: task.isDone,
          title: changedTaskText,
          isListDone: isListDone,
        })
      );
      dispatch(actions.editTaskText(updateTextParams));
    }
  };

  const updateTaskFavorite = () => {
    dispatch(
      updateTask({
        isFavorite: !task.isFavorite,
        id: task.id,
        isDone: task.isDone,
        title: task.title,
        isListDone: isListDone,
      })
    );
    dispatch(actions.changeFavoriteStatus(task.id));
  };

  const inputTextChanger = (event) => {
    const { value } = event.target;
    const text = value;
    dispatch(actions.updateEditTaskText(text));
  };

  const updateCategoryHandler = () => {
    dispatch(
      updateTask({
        isFavorite: task.isFavorite,
        title: task.title,
        isDone: !task.isDone,
        id: task.id,
        isListDone: isListDone,
      })
    );
    dispatch(actions.changeTaskStatus(task.id, isListDone));
  };

  const changeTaskHandler = () => {
    dispatch(actions.changeHandler(task.id));
  };

  const deleteChosenTask = () => dispatch(deleteTask(task.id));

  const enterHandler = (event) =>
    changedTaskText.length > 0 ? editHandleEnter(event) : null;
  debugger;
  return (
    <Grid item xs={12}>
      <Paper elevation={2} style={styles.Paper}>
        <div style={{ padding: '9px' }}>{`${new Date(
          task.date
        ).toLocaleDateString()}`}</div>
        <Checkbox onClick={updateCategoryHandler} checked={task.isDone} />
        <div style={{ padding: '10px' }}>
          {categories.map((category) => {
            if (category.id === task.categoryID) {
              return (
                <span
                  key={task.categoryID}
                  className="material-icons"
                  style={{
                    color: category.color,
                    verticalAlign: 'middle',
                    margin: 5,
                  }}
                >
                  {category.icon}
                </span>
              );
            }
          })}
        </div>

        {task.isEdit ? (
          <TextField
            value={changedTaskText}
            onChange={inputTextChanger}
            key={task.id + 1}
            onKeyPress={enterHandler}
          />
        ) : (
          //(<span>{task.title}</span>)
          <span onClick={changeTaskHandler}>{task.title}</span>
        )}
        <StyledButton className="material-icons" onClick={updateTaskFavorite}>
          {task.isFavorite ? <StarIcon /> : <StarBorderIcon />}
        </StyledButton>

        <IconButton
          color="secondary"
          aria-label="Delete"
          onClick={deleteChosenTask}
        >
          <Delete fontSize="small" />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default TaskItem;
