import React from 'react';
import { useStyles } from './AppNavbar.styles';
import { NavLink } from 'react-router-dom';
import { navTabs } from './utils/navTabs';

export const AppNavbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_wrap}>
        {navTabs.map(({ to, title }) => (
          <NavLink className={classes.navbar_links} to={to} key={to}>
            {title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
