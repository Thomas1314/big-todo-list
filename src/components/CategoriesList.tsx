import React from 'react';
import { Category } from './Category';
import { CategoryType } from '../types/types';
import { Colors, Icons } from '../api/api';

type PropsType = {
  categories: CategoryType[];
  setEdit: (edit: boolean) => void;
  editCategoryId: number | null;
  setEditCategoryId: (id: number | null) => void;
  setButton: (button: Colors) => void;
  setChoosesIcon: (Icon: Icons) => void;
};

export const CategoriesList: React.FC<PropsType> = ({
  categories,
  setEdit,
  setEditCategoryId,
  editCategoryId,
  setButton,
  setChoosesIcon,
}) => {
  return (
    <>
      {categories.map((category) => (
        <Category
          category={category}
          key={category.id}
          setEdit={setEdit}
          setEditCategoryId={setEditCategoryId}
          editCategoryId={editCategoryId}
          setButton={setButton}
          setChoosesIcon={setChoosesIcon}
        />
      ))}
    </>
  );
};
