import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import navLinks from './utils/links';
import Main from './pages/Main/Main';
import CompletedTasks from './pages/CompletedTasks/CompletedTasks';
import Settings from './pages/Settings/Settings';
import { useStyles } from './appStyle';


const App = () => {

  const classes = useStyles();

  return (
    <Router>

      <nav className={classes.navbar}>
        <div className={classes.navbarContainer}>
          {navLinks.map(({ to, title}) => (
            <NavLink className={classes.navLinks} to={to} key={to}>
              {title}
            </NavLink>
          ))}
        </div>
      </nav>

      <div>
        <Switch>
          <Route path='/todo' component={Main} />
          <Route path='/doneTasks' component={CompletedTasks} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </div>

    </Router>
    );
}
  
 export default App;
