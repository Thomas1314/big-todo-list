import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Build } from "@material-ui/icons";

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

const Task = ({ task, ...props }) => {
    const ActionButton = () => (
        <div className='action-btn'>
            {!task.done ? 
            (
              <p onClick={props.doneTask}>✔️</p>  
            ) : (
              <p onClick={props.returnToUnDoneTask}>X</p>  
            )}
        </div>
    );
    
    const className= 'task ' + (task.done ? 'task-done' : '');

    

    return (
        <Grid item xs={12}>
          <Paper elevation={2} style={styles.Paper}>
            <span style={styles.Todo}>{task.title}</span>
            <ActionButton></ActionButton>

            <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={props.deleteTodo}
          >
            <Delete fontSize="small" />
            </IconButton>

          </Paper>
        </Grid>
    );
};


export default Task;