import React from 'react';
import { makeStyles } from '@material-ui/styles';

export const Icon = ({ icon, color }) => {
  const useStylesSpan = makeStyles({
    CategoryIcon: {
      color: color,
    },
  });

  const iconClasses = useStylesSpan();

  return (
    <span className={`${iconClasses.CategoryIcon} material-icons`}>{icon}</span>
  );
};
