import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import TaskItem from "../components/TaskInput";
import { useSelector } from 'react-redux';

const List = ({ tasks, isListDone }) => {
    const [todos, setTodos] = useState([]);

    /* useEffect(() => {
        axios.get('http://localhost:3000/tasks')
        .then(res => {
            //debugger;
            const responeTodos = res.data;
            setTodos(responeTodos); 
        })
    }, []) */

    //let todos = useSelector(state => state);
    
    debugger;
    return (
        <Grid container>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} isListDone={isListDone} />
            })}
        </Grid>
    )
}


export default List;



