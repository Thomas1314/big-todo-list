import React, { Fragment } from 'react';
import TaskInput from './components/TaskInput';
import List from './components/List';
import { Paper, Grid, Tabs, Tab, Hidden } from "@material-ui/core";
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import navLinks from './utils/links';
import routes from './utils/routes';

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
      <nav className='navbar'>
        <div className='navbar_container'>
          {navLinks.map(({ to, title}) => (
            <NavLink className='nav_links' to={to} key={to}>
              {title}
            </NavLink>
          ))}
        </div>
      </nav>
      <div>
        <Switch>
          {routes.map(({ path, component }) => ( 
            <Route key={path} exact path={path} component={component} />
          ))}
        </Switch>
      </div>
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
