import React, { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Build } from "@material-ui/icons";
import { useDispatch } from 'react-redux';
import { deleteTodo } from "../redux/actions";
import { editTodo } from '../redux/actions'

import Input from "@material-ui/core/Input";

const styles = {
    Icon: {
      marginLeft: "auto"
    },
    Paper: {
      margin: "auto",
      padding: 10,
      display: "flex",
      alignItems: "center",
      marginTop: 10,
      width: 500
    }
  };



const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.title);
  let dispatch = useDispatch();

    return (
        <Grid item xs={12}>
        <Paper elevation={2} style={styles.Paper}>
          {edit 
          ? <Input type='text' value={name} onChange={(e) => setName(e.target.value)} /> 
          : <span style={styles.Todo}>{todo.title}</span>
          } 
            {/* <span>{todo.title}</span> */}
            <IconButton
              onClick={() => {
                dispatch(editTodo({
                    ...todo,
                    title: name
                }))
                if (edit) {
                 setName(todo.title);   
                }
                setEdit(!edit);
            }}
              color="primary"
              aria-label="Edit"
              style={styles.Icon}
            >
              {edit ? <Button variant="contained">Update</Button> : <Build fontSize="small" />}
            </IconButton>
          
            <IconButton
              color="secondary"
              aria-label="Delete"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <Delete fontSize="small" />
            </IconButton>

        </Paper>
      </Grid>
    )
}

export default TodoItem;