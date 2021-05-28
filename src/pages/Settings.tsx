import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { Select } from '@material-ui/core';
import { Icon } from '../components/Icon';
import { CategoriesList } from '../components/CategoriesList';
import { CategoryCreator } from '../components/CategoryCreator';
import {
  getCategoriesFromState,
  selectDefaultCategoryID,
} from '../redux/selectors/selectors';
import {
  actions,
  getCategories,
  getDefaultCategory,
  updateDefaultCategory,
} from '../redux/actions';
import useStyles from './Settings.styles';
import { Colors, Icons } from '../api/api';

export const Settings: React.FC = () => {
  const classes = useStyles();
  const categories = useSelector(getCategoriesFromState);
  const categoryId = useSelector(selectDefaultCategoryID);
  const [category, setCategory] = useState<number | null>(categoryId);
  const [opened, setOpened] = useState<boolean>(false);
  const [edit, setEdit] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState<number | null>(null);
  const [button, setButton] = useState<Colors>('black');
  const [choosesIcon, setChoosesIcon] = useState<Icons>('home');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getDefaultCategory());
  }, []);

  useEffect(() => {
    setCategory(categoryId);
  }, [categoryId]);

  const onOpen = () => {
    setOpened(true);
  };
  const onClose = () => {
    setOpened(false);
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    dispatch(actions.setCategory(event.target.value as number));
    dispatch(updateDefaultCategory(event.target.value as number));
  };

  return (
    <div>
      <h1 className={classes.SettingsMainTitle}>Settings</h1>
      <div className={classes.SettingsPageContainer}>
        <div>
          <h2>{edit ? 'Edit Icon' : 'Categories Maker'}</h2>
          <CategoryCreator
            edit={edit}
            editCategoryId={editCategoryId}
            setEditCategoryId={setEditCategoryId}
            setEdit={setEdit}
            setButton={setButton}
            setChoosesIcon={setChoosesIcon}
            button={button}
            choosesIcon={choosesIcon}
          />
        </div>
        <div className={classes.SettingsPageCategories}>
          <div>
            <h2>Categories</h2>
          </div>
          <CategoriesList
            categories={categories}
            setEdit={setEdit}
            setEditCategoryId={setEditCategoryId}
            editCategoryId={editCategoryId}
            setButton={setButton}
            setChoosesIcon={setChoosesIcon}
          />
          <h4>Default category: </h4>

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
                  {opened && name}
                </>
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};
