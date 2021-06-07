import React, { useState } from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/moment';
import { useStyles } from './CompletedTasks.styles';
import { Grid } from '@material-ui/core';
import { ListWrapper } from '../components/TaskListWrapper';
import { DateType } from '@date-io/type';

export const CompletedTasks: React.FC = () => {
  const classes = useStyles();

  const [selectedDateFrom, setSelectedDateFrom] = useState<DateType | null>(
    new Date('2021-01-01')
  );
  const [selectedDateTo, setSelectedDateTo] = useState<DateType | null>(
    new Date('2021-10-31')
  );

  const handleDateFromChange = (date: DateType | null) => {
    setSelectedDateFrom(date);
  };
  const handleDateToChange = (date: DateType | null) => {
    setSelectedDateTo(date);
  };
  debugger;
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

      <Grid item xs={12}>
        <Grid container style={{ display: 'block' }}>
          <ListWrapper
            isListDone
            selectedDateFrom={selectedDateFrom}
            selectedDateTo={selectedDateTo}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
