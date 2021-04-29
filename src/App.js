import React, { Fragment } from 'react';
import TaskInput from './components/TaskInput';
import Todo from './components/Todo';
import { Paper, Grid } from "@material-ui/core";

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

  updateTask = (id, newName) => {
    const editedTaskList = this.state.tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    })
    this.setState(editedTaskList);
  }


  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTask = tasks.filter(task => task.done);


    return(
      <Fragment>

        <Paper>
          <h1>Active Tasks: {activeTasks.length}</h1>
          <button type='button'>Show All Tasks</button>
          <button>show active tasks</button>
          <button>show completed tasks</button>
        </Paper>
          
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper style={styles.Paper}>
              <TaskInput addTask={this.addTask}></TaskInput>
            </Paper>
          </Grid>

        <Grid item xs={12} style={styles.Paper}>
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
        </Grid>

        </Grid>
      </Fragment>
    );
  } 
}




 export default App;
