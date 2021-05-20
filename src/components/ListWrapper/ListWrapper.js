/* import React from 'react';
import List from '../List/List';
import ListHook from '../../hooks/ListHook';

const ListWrapper = ({ isListDone }) => {
    
    const {
        tasks,
        unDoneTasks,
        categories,
        dispatch
    } = ListHook();

    return (
        <List 
            tasks={!isListDone ? unDoneTasks : tasks}
            isListDone={isListDone}
            categories={categories}
        />
    )
}

export default ListWrapper; */