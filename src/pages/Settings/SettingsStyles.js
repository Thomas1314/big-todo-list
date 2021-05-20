import {makeStyles} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

const useStyles = makeStyles( {
    SettingsPageContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        padding: '20px',
        [theme.breakpoints.up('sm')]: {
            flexDirection: "row",
        },
    },
    SettingsPageCategories: {
        minWidth: '200px'
    },
    SettingsCategoryCreator: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "15px",
    },
    SettingsMainTitle: {
        textAlign: "center",
    },
    CategoryParams: {
        display: "flex",
        alignItems: 'center',
    },
    DefaultCategoryIcon: {
        marginRight: '15px'
    },
    SettingsColorButton: {
        margin: "5px",
        height: 40,
        width: 100,
    },
    SettingsIconButton: {
        margin: "5px",
        height: 40,
        width: 100,
    },
    SettingsColorButtonActive: {
        margin: "5px",
        height: 40,
        width: 100,
        boxShadow: '0 0 10px rgba(255,0,0,0.7)'
    },
    SettingsIconButtonActive: {
        margin: "5px",
        height: 40,
        width: 100,
        outline: '1px solid red',
    },
});

export default useStyles;
