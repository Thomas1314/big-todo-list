import React from 'react';
import { useStyles } from './AppNavbar.styles';
import { NavLink } from 'react-router-dom';
import { navTabs } from './utils/navTabs';

export const AppNavbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarContainer}>
        {navTabs.map(({ to, title }) => (
          <NavLink className={classes.navLinks} to={to} key={to}>
            {title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
