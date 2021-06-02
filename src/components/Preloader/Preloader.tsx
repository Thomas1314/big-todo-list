import React from 'react';
import preloader2 from '../../assets/images/preloader2.svg';
import { useStyles } from './Preloader.styles';

const Preloader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.preloader}>
      <img src={preloader2} alt="preloader" />
    </div>
  );
};

export default Preloader;
