import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import axios from 'axios';

const List = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/tasks')
        .then(res => {
            //debugger;
            const responeTodos = res.data;
            setTodos(responeTodos); 
        })
    }, [])

    //let todos = useSelector(state => state);
    debugger
    return (
        <Grid container>
            {todos.map((todo) => {
                return <TodoItem key={todos.id} todo={todo} />
            })}
        </Grid>
    )
}


export default List;



