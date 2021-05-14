import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CategoriesList from "../../components/Categories/CategoiesList";
import CategoryCreator from "../../components/CategoryCreator/CategoryCreator";
import {
  getCategoriesFromState,
  selectDefaultCategoryId,
} from "../../redux/selectors/selector";


const Settings = () => {
    
    const categories = useSelector(getCategoriesFromState);
    const categoryId = useSelector(selectDefaultCategoryId);

    return (
        <div>
          <h1 >Settings</h1>
          <div >
            <div>
              <h2></h2>
              <CategoryCreator />
            </div>
            <div >
              <div>
                <h2>Categories</h2>
              </div>
              <CategoriesList />
              <h4>Default category: </h4>
    
            </div>
          </div>
        </div>
      );
    };
    
    export default Settings;
    
  