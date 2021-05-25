import React from 'react';
import { Category } from './Category';

export const CategoriesList = ({
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
