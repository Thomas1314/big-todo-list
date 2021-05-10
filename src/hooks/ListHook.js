import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ListHook = () => {
    const dispatch = useDispatch();
    
    const tasks = useSelector(getTasksFromState);
}