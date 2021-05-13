import React, { Fragment } from 'react';
import TaskInput from './components/TaskInput';
import List from './components/List';
import { Paper, Grid, Tabs, Tab, Hidden } from "@material-ui/core";
import { BrowserRouter as Router } from 'react-router-dom';

const styles = {
  Paper: {
    padding: 20,
    margin: "auto", 
    textAlign: "center",
    width: 500
  }
};

const App = () => {

  return (
    <Router>
        <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper style={styles.Paper}>
                <TaskInput />
              </Paper>
            </Grid>

            <Grid item xs={12} style={styles.Paper}>
              <Grid container>
                <List />
              </Grid>        
            </Grid>
        </Grid>
    </Router>
    );
}
  
 export default App;
