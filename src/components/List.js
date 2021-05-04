import React from "react";
import TodoItem from "../components/TodoItem";
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';

const List = () => {
    let todos = useSelector(state => state);
    debugger;
    return (
        <Grid container>
            {todos.map((todo) => {
                return <TodoItem key={todos.id} todo={todo} />
            })}
        </Grid>
    )
}


export default List;



