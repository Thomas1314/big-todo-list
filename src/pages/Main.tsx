import { Button, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import TaskInput from '../components/TaskInput';
import { Paper, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/moment';
import { useStyles } from './Main.styles';
import { ListWrapper } from '../components/TaskListWrapper';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { useDispatch } from 'react-redux';

type DateType = MaterialUiPickersDate | null;

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [selectedDateFrom, setSelectedDateFrom] =
    useState<DateType | null>(null);

  const [selectedDateTo, setSelectedDateTo] = useState<DateType | null>(null);

  const [selectDateFrom, setSelectDateFrom] = useState<DateType | null>(null);

  const [selectDateTo, setSelectDateTo] = useState<DateType | null>(null);

  const handleDateFromChange = (date: DateType | null) => {
    setSelectedDateFrom(date);
  };

  const handleDateToChange = (date: DateType | null) => {
    setSelectedDateTo(date);
  };

  const setSelectDate = () => {
    setSelectDateFrom(selectedDateFrom);
    setSelectDateTo(selectedDateTo);
  };

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
                'aria-label': 'change date',
              }}
              /* style={{width: 180, marginBottom: "20px", marginRight: "20px"}} */
              disableToolbar
            />
          </MuiPickersUtilsProvider>
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
                'aria-label': 'change date',
              }}
              /* style={{width: 180, marginBottom: "20px"}} */
              disableToolbar
            />
          </MuiPickersUtilsProvider>

          <Button variant="outlined" onClick={setSelectDate}>
            Filter
          </Button>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.Paper}>
          <TaskInput />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Grid container style={{ display: 'block' }}>
          <ListWrapper
            isListDone={false}
            selectedDateFrom={selectDateFrom}
            selectedDateTo={selectDateTo}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
