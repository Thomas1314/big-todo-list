import React from 'react';
import preloader from '../../assets/images/preloader.svg';
import { useStyles } from './Preloader.styles';

const Preloader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
