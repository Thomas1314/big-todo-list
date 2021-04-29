import React, { Fragment } from 'react';
import Task from './components/Todo'
import TaskInput from './components/TaskInput';
import { Paper, Grid, Typography } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500
  }
};


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Create todo-react-app', done: false }, 
        { id: 1, title: 'Make a video about it', done: true },
        { id: 2, title: 'Create simple todo-app', done: false }
      ]    
    }
  }

  

  
  addTask = (task) => {
    this.setState((state) => {
      let { tasks } = state
      
      return {
        tasks: [
          ...tasks,
          {
            id: tasks.length !== 0 ? tasks.length : 0,
            title: task,
            done: false,
          },
        ],
      }
    })
  }
     
  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state; 
      tasks[index].done = true;
      return tasks;
    });
  };

  returnToUnDoneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
      this.setState(state => {
      let { tasks } = state;
      tasks[index].done = false 
      return tasks;
    })
  }
  
  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  }


  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTask = tasks.filter(task => task.done);


    return(
      <Fragment>
        <Paper>
        <h1 className='top'>Tasks: {activeTasks.length}</h1>
        </Paper>
        
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper style={styles.Paper}>
              <TaskInput addTask={this.addTask}></TaskInput>
            </Paper>
          </Grid>

        {/*<Grid xs={12} styles={styles.Paper}>
        {[...activeTasks, ...doneTask].map(task => (
          <Task 
          doneTask={() => this.doneTask(task.id)}
          returnToUnDoneTask={() => this.returnToUnDoneTask(task.id)}
          deleteTask={() => this.deleteTask(task.id)}
          task={task} 
          key={task.id}
          ></Task>
          ))}
        </Grid>*/}
        </Grid>
      </Fragment>
    );
  } 
}




 export default App;
