import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TaskInput from "../../components/TaskInput/TaskInput";
import List from "../../components/List/List";
import { Paper, Grid } from "@material-ui/core";
import DateFnsUtils from '@date-io/moment';
import { useStyles } from './MainStyles';
import ListWrapper from '../../components/ListWrapper/ListWrapper';


const styles = {
    Paper: {
      padding: 20,
      margin: "auto", 
      textAlign: "center",
      width: 500
    }
  };


const Main = () => {

    const classes = useStyles();

    const [taskDate, setTaskDate] = useState(new Date(Date.now()));
    const [selectedDateFrom, setSelectedDateFrom] = useState(null);

    const [selectedDateTo, setSelectedDateTo] = useState(null)

    const [selectDateFrom, setSelectDateFrom] = useState(null);

    const [selectDateTo, setSelectDateTo] = useState(null);


    const handleDateFromChange = (date) => {
        setSelectedDateFrom(date);
    }

    const handleDateToChange = (date) => {
        setSelectedDateTo(date);
    }

    const setSelectDate = () => {
        setSelectDateFrom(selectedDateFrom)
        setSelectDateTo(selectedDateTo)
    }

    return (
    <Grid container spacing={0}>

        <Grid item xs={12}>
            <div className={classes.MainListDateFilter}>
                <span className="AppText">с</span>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        variant="inline"
                        format="dd-MM-yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={selectedDateFrom}
                        onChange={handleDateFromChange}
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                        /* style={{width: 180, marginBottom: "20px", marginRight: "20px"}} */
                        disableToolbar
                    />
                </MuiPickersUtilsProvider >
                        <span className="AppText">по</span>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        variant="inline"
                        format="dd-MM-yyyy"
                        margin="normal"
                        id="date-picker-inline2"
                        value={selectedDateTo}
                        onChange={handleDateToChange}
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                        /* style={{width: 180, marginBottom: "20px"}} */
                        disableToolbar
                    />
                </MuiPickersUtilsProvider>

                <Button
                    variant="outlined"
                    onClick={setSelectDate}
                >
                    Filter
                </Button>

            </div>
        </Grid>

        <Grid item xs={12}>
            <Paper style={styles.Paper}>
                <TaskInput />
            </Paper>
        </Grid>

        <Grid item xs={12} style={styles.Paper}>
            <Grid container>
                <List isListDone={false} selectedDateFrom={selectDateFrom} selectedDateTo={selectDateTo} />
            </Grid>        
        </Grid>

    </Grid>
    );
};

export default Main;
