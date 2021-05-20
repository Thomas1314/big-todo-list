import React from 'react';
import Category from './Category';
import { CSSTranstion, TransitionGroup } from 'react-transition-group';

const CategoriesList = ({ categories, setEdit, setEditcategoryId,
                            editCategoryId, setButton, setChoosesIcon}) => (

    <>
        {categories.map((category) => (
            <Category category={category} key={category.id}
                 setEdit={setEdit} setEditCategoryId={setEditcategoryId}
                 editCategoryId={editCategoryId}
                 setButton={setButton} setChoosesIcon={setChoosesIcon}
            />
        ))}
    </>
)

export default CategoriesList;