import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  navbar: {
    display: 'flex',
    alignItems: 'center',
  },
  navbar_wrap: {
    display: 'flex',
    margin: 'auto',
    width: '500px',
    justifyContent: 'space-between',
  },
  navbar_links: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
  },
}));
