import withStyles from '@material-ui/core/styles/withStyles';
import {IconButton} from '@material-ui/core';

export const StyledButton = withStyles({
    root: {
        padding: '0',
        minWidth: '5px',
        color: 'black'
        },
    }
)(IconButton);