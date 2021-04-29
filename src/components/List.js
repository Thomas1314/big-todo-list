import React from "react";
import Todo from "../components/Todo";
import { Grid } from "@material-ui/core";

class List extends React.Component {
    
    render() {
        return (
            <Grid container>
                {[...activeTasks, ...doneTask].map(task => (
                <Task 
                doneTask={() => this.doneTask(task.id)}
                returnToUnDoneTask={() => this.returnToUnDoneTask(task.id)}
                deleteTask={() => this.deleteTask(task.id)}
                task={task} 
                key={task.id}
                ></Task>
                ))}
            </Grid>
        )
    }
}



