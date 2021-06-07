import React, { useEffect, useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { addTask, actions } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesFromState,
  getNewTaskText,
  selectDefaultCategoryId,
} from '../redux/selectors/selectors';
import { Select } from '@material-ui/core';
import { Icon } from './Icon';
import { useStyles } from './TaskInput.styles';
import { newTaskParamsType } from '../types/types';

export const TaskInput: React.FC = () => {
  const classes = useStyles();

  const newTaskText = useSelector(getNewTaskText);
  const categories = useSelector(getCategoriesFromState);
  const categoryId = useSelector(selectDefaultCategoryId);
  const [open, setOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<number | null>(categoryId);
  const [taskDate] = useState(new Date(Date.now()));
  const dispatch = useDispatch();

  useEffect(() => {
    setCategory(categoryId);
  }, [categoryId]);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const newTaskParams: newTaskParamsType = {
    title: newTaskText,
    isDone: false,
    isEdit: false,
    categoryId: categoryId,
    isFavorite: false,
    date: taskDate.valueOf(),
  };

  const addHandleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (newTaskText && newTaskText.length < 30 && event.key === 'Enter') {
      dispatch(addTask(newTaskParams));
    }
  };

  const inputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    const text = value;
    dispatch(actions.updateNewMessageText(text));
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    dispatch(actions.setCategory(event.target.value as number));
  };
  return (
    <div className={classes.todoForm}>
      <Input
        value={newTaskText}
        onChange={inputChange}
        onKeyPress={addHandleEnter}
        placeholder="Todo"
        style={{ width: '90%' }}
      />
      {category !== null ? (
        <Select
          onOpen={onOpen}
          onClose={onClose}
          onChange={handleChangeCategory}
          value={category}
        >
          {categories.map(({ id, color, icon, name }) => (
            <MenuItem key={id} value={id}>
              <>
                <Icon color={color} icon={icon} />
                {open && name}
              </>
            </MenuItem>
          ))}
        </Select>
      ) : null}
      <Button
        type="submit"
        disabled={newTaskText.length === 0 || newTaskText.length > 30}
        variant="contained"
        color="primary"
        style={{ width: '10%' }}
        onClick={() => {
          newTaskText &&
            newTaskText.length < 10 &&
            dispatch(addTask(newTaskParams));
        }}
      >
        Add
      </Button>
    </div>
  );
};
