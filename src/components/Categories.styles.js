import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 340,
      sm: 650,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const useStyles = makeStyles({
  CategoryPageContainer: {
    minHeight: '48px',
    minWidth: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  CategoryParams: {
    display: 'flex',
    alignItems: 'center',
    width: '300px',
  },
  CategoryTitle: {
    display: 'flex',
    justifyContent: 'center',
  },
  categoryTitleWithEdit: {
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  CategoryParamsName: {
    marginLeft: '10px',
  },
  CategoryPageRow: {
    display: 'flex',
    alignItems: 'center',
  },
});
