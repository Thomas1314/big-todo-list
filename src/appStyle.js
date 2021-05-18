import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    navbar: {
        alignItems: "center",
        display: "flex"
    },
    navbarContainer: {
        width: "500px",
        display: "flex",
        justifyContent: "space-between",
        margin: "auto"
    },
    navLinks: {
        color: "black",
        textDecoration: "none",
        fontFamily: "Roboto",
        textTransform: "uppercase"
    }
}));

