import React, { useState } from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { List } from './../components/TaskList';
import DateFnsUtils from '@date-io/moment';
import { useStyles } from './CompletedTasks.styles';
import { Paper, Grid } from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    margin: 'auto',
    textAlign: 'center',
    width: 500,
  },
};

export const CompletedTasks = () => {
  const classes = useStyles();

  const [selectedDateFrom, setSelectedDateFrom] = useState(
    new Date('2021-01-01')
  );

  const [selectedDateTo, setSelectedDateTo] = useState(new Date('2021-10-31'));

  const handleDateFromChange = (date) => {
    setSelectedDateFrom(date);
  };

  const handleDateToChange = (date) => {
    setSelectedDateTo(date);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.CompletedDateFilter}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              format="yyyy-MM-dd"
              variant="inline"
              value={selectedDateFrom}
              onChange={handleDateFromChange}
              KeyboardButtonProps={{ 'aria-label': 'change date' }}
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              format="yyyy-MM-dd"
              variant="inline"
              value={selectedDateTo}
              onChange={handleDateToChange}
              KeyboardButtonProps={{ 'aria-label': 'change date' }}
            />
          </MuiPickersUtilsProvider>
        </div>
      </Grid>

      <Grid item xs={12} style={styles.Paper}>
        <Grid container>
          <List isListDone />
        </Grid>
      </Grid>
    </Grid>
  );
};
