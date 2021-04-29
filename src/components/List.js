import React from "react";
import Todo from "../components/Todo";
import { Grid } from "@material-ui/core";

class List extends React.Component {

    render() {
        const { tasks } = this.state;
        const activeTasks = tasks.filter(task => !task.done);
        const doneTask = tasks.filter(task => task.done);

        return (
            <Grid container>
                {[...activeTasks, ...doneTask].map(task => (
                <Todo                
                doneTask={() => this.doneTask(task.id)}
                returnToUnDoneTask={() => this.returnToUnDoneTask(task.id)}
                deleteTask={() => this.deleteTask(task.id)}
                task={task} 
                key={task.id}
                ></Todo>
                ))}
            </Grid>
        )
    }
}

export default List;



