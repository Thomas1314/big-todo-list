import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesFromState,
  getCategoriesName,
} from '../redux/selectors/selectors';
import Input from '@material-ui/core/Input';
import useStyles from '../pages/Settings.styles';
import colors from '../utils/colors';
import icons from '../utils/icons';
import { Icon } from './Icon';
import { actions, addCategory, updateCategory } from '../redux/actions';
import { Colors, Icons } from '../api/api';

type CategoryCreatorType = {
  edit: boolean;
  editCategoryId: number | null;
  setEdit: (edit: boolean) => void;
  setEditCategoryId: (id: number | null) => void;
  setButton: (button: Colors) => void;
  setChoosesIcon: (Icon: Icons) => void;
  button: Colors;
  choosesIcon: Icons;
};

export const CategoryCreator: React.FC<CategoryCreatorType> = ({
  edit,
  editCategoryId,
  setEdit,
  setEditCategoryId,
  setButton,
  setChoosesIcon,
  button,
  choosesIcon,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const categoriesName = useSelector(getCategoriesName);
  const categories = useSelector(getCategoriesFromState);

  const [categoryColor, setCategoryColor] = useState<Colors>('black');
  const [categoryIcon, setCategoryIcon] = useState<Icons>('home');
  const [isCategoryAvailable, setIsCategoryAvailable] =
    useState<boolean>(false);

  useEffect(() => {
    setCategoryColor(button);
    setCategoryIcon(choosesIcon);
  }, [button, choosesIcon]);

  const onUpdateCategoryName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const text = event.target.value;
    dispatch(actions.updateCategoryText(text));
  };

  const onUpdateCategoryColor = (color: Colors) => {
    setCategoryColor(color);
  };

  const onUpdateCategoryIcon = (icon: Icons) => {
    setCategoryIcon(icon);
  };

  const newCategoryParams = {
    name: categoriesName,
    color: categoryColor,
    icon: categoryIcon,
    isEdit: false,
  };

  const editCategoryParams = {
    color: categoryColor,
    icon: categoryIcon,
    id: editCategoryId,
  };

  useEffect(() => {
    setIsCategoryAvailable(
      categories.some(
        (category) =>
          category.icon === categoryIcon && category.color === categoryColor
      )
    );
  }, [categories, categoryIcon, categoryColor]);

  const addNewCategory = () => {
    if (categoriesName && categoriesName.length <= 10) {
      dispatch(addCategory(newCategoryParams));
    }
  };

  const editCategory = () => {
    dispatch(updateCategory(editCategoryParams));
    setEdit(false);
    setEditCategoryId(null);
  };

  const AddHandleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      categoriesName &&
      categoriesName.length <= 10 &&
      event.key === 'Enter'
    ) {
      return !isCategoryAvailable
        ? dispatch(addCategory(newCategoryParams))
        : null;
    }
  };
  return (
    <div>
      {!edit ? (
        <Input
          value={categoriesName}
          onKeyPress={AddHandleEnter}
          onChange={onUpdateCategoryName}
          placeholder="New Category"
        />
      ) : null}
      <h3>Color</h3>
      <div className={classes.SettingsCategoryCreator}>
        {colors.map((color) => (
          <Button
            key={color}
            className={
              button === color
                ? classes.SettingsColorButtonActive
                : classes.SettingsColorButton
            }
            style={{ background: `${color}` }}
            onClick={() => {
              onUpdateCategoryColor(color);
              setButton(color);
            }}
          />
        ))}
      </div>
      <h3>Icons</h3>
      <div className={classes.SettingsCategoryCreator}>
        {icons.map((icon) => (
          <Button
            key={icon}
            onClick={() => {
              onUpdateCategoryIcon(icon);
              setChoosesIcon(icon);
            }}
            className={
              choosesIcon === icon
                ? classes.SettingsColorButtonActive
                : classes.SettingsColorButton
            }
          >
            <Icon color={button} icon={icon} />
          </Button>
        ))}
      </div>
      <div>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={edit ? editCategory : addNewCategory}
          disabled={
            edit
              ? isCategoryAvailable
              : isCategoryAvailable ||
                categoriesName.length > 10 ||
                categories.length >= 9 ||
                categoriesName.length === 9
          }
        >
          {edit ? 'Edit' : 'Create'}
        </Button>
      </div>
    </div>
  );
};
