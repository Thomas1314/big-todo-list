import React from 'react';
import List from '../List/List';
import ListHook from '../../hooks/ListHook';

const ListWrapper = ({ isListDone }) => {
    
    const {
        tasks,
        unDoneTasks,
        dispatch
    } = ListHook();

    return (
        <List 
            tasks={!isListDone ? unDoneTasks : tasks}
            isListDone={isListDone}
        />
    )
}

export default ListWrapper;