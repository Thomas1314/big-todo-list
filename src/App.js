import React, { Fragment } from 'react';
import TodoInput from './components/TodoInput';
import List from './components/List';
import { Paper, Grid } from "@material-ui/core";

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
    <div>

      <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper style={styles.Paper}>
              <TodoInput />
            </Paper>
          </Grid>

        <Grid item xs={12} style={styles.Paper}>
          <Grid container>
            <List />
          </Grid>        
        </Grid>
      </Grid>

    </div>
    );
}
  
 export default App;
