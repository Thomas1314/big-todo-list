import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from 'react-redux';
import ListHook from '../../hooks/ListHook';

const List = ({ isListDone }) => {
    const { tasks, categories } = ListHook();

    //debugger;
    return (
        <Grid container>
            {tasks.map((task) => {
                return <TaskItem 
                            key={task.id} 
                            task={task} 
                            isListDone={isListDone}
                            categories={categories}
                        />
            })}
        </Grid>
    )
}


export default List;



