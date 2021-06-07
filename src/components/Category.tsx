import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import React, { ChangeEvent } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './Categories.styles';
import { actions, deleteCategory, updateCategoryText } from '../redux/actions';
import {
  getChangedCategoryText,
  selectDefaultCategoryId,
} from '../redux/selectors/selectors';
import { CategoryType, updateCategoryParamsType } from '../types/types';
import { Colors, Icons } from '../api/api';
import { maxLength } from './../utils/validators/validators';

export type CategoryPropsType = {
  category: CategoryType;
  setEdit: (edit: boolean) => void;
  setEditCategoryId: (id: number) => void;
  editCategoryId: number | null;
  setButton: (button: Colors) => void;
  setChoosesIcon: (Icons: Icons) => void;
};

export const Category: React.FC<CategoryPropsType> = ({
  category,
  setEdit,
  setEditCategoryId,
  editCategoryId,
  setButton,
  setChoosesIcon,
}) => {
  const { color, icon, name, isEdit, id } = category;

  const useStylesSpan = makeStyles({
    CategoryIcon: {
      color: color,
    },
  });

  const iconClasses = useStylesSpan();
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoryId = useSelector(selectDefaultCategoryId);
  const changedCategoryText = useSelector(getChangedCategoryText);

  const updateCategoryParams = {
    name: changedCategoryText,
    id,
  };

  const deleteChosenCategory = () => {
    dispatch(deleteCategory(id));
    setEditCategoryId(id);
  };

  const inputTextChanger = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    const text = value;
    dispatch(actions.updateEditCategoryText(text));
  };

  const editHandleEnter = (
    event: React.KeyboardEvent<HTMLDivElement>,
    updateCategoryParams: updateCategoryParamsType
  ) => {
    if (event.key === 'Enter') {
      dispatch(updateCategoryText(updateCategoryParams));
    }
  };

  const enterHandler = (event: React.KeyboardEvent<HTMLDivElement>) =>
    changedCategoryText.length > 0
      ? editHandleEnter(event, updateCategoryParams)
      : null;

  const changeCategoryHandler = () => {
    dispatch(actions.changeCategoryHandler(id));
  };

  return (
    <div className={classes.CategoryPageContainer}>
      <div className={classes.CategoryPageRow}>
        <div className={classes.CategoryParams}>
          <Button
            onClick={() => {
              setEdit(true);
              setEditCategoryId(id);
              setButton(color);
              setChoosesIcon(icon);
            }}
          >
            <span className={`${iconClasses.CategoryIcon} material-icons`}>
              {icon}
            </span>
          </Button>
          {isEdit ? (
            <Input
              value={changedCategoryText}
              onChange={inputTextChanger}
              onKeyPress={enterHandler}
              placeholder="edit category"
            />
          ) : (
            <span
              onClick={changeCategoryHandler}
              className={classes.categoryTitleWithEdit}
            >
              {name}
            </span>
          )}
        </div>
        <div>
          {categoryId !== id && (
            <IconButton
              aria-label="Delete"
              onClick={deleteChosenCategory}
              disabled={editCategoryId === id}
            >
              <ClearIcon color={'secondary'} />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};
