import withStyles from '@material-ui/core/styles/withStyles';
import { IconButton } from '@material-ui/core';

export const StyledButton = withStyles({
  root: {
    color: 'black',
  },
})(IconButton);
