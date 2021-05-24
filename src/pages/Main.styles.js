import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    MainPageContainer: {
        display: "flex",
        justifyContent: "center"
    },
    MainPageTitle: {
        display: "flex",
        justifyContent: "center"
    },
    MainList: {
        marginTop: "20px",
        padding: "30px"
    },
    MainListDateFilter: {
        padding: "20px",
        margin: "auto", 
        textAlign: "center",
        display: "flex",
        width: "350px"
    }
}))