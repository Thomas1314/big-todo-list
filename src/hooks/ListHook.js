import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksFromState, getCategoriesFromState, getIsFetching } from '../redux/selectors/selectors';
import { getDefaultCategory, getCategories } from '../redux/actions';

const ListHook = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(getTasksFromState);
    const categories = useSelector(getCategoriesFromState);
    const isFetching = useSelector(getIsFetching);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getDefaultCategory());
    }, [])

    return {
        tasks,
        categories,
        isFetching,
        dispatch
    }
}

export default ListHook;