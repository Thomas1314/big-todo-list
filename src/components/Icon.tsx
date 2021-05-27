import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Colors, Icons } from '../api/api';

export type IconType = {
  icon: Icons | undefined;
  color: Colors | undefined;
};

export const Icon: React.FC<IconType> = ({ icon, color }) => {
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
