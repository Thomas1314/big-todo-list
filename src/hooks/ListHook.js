import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksFromState } from '../redux/selectors/selectors';

const ListHook = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(getTasksFromState);

    return {
        tasks,
        dispatch
    }
}

export default ListHook;