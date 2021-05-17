import React, { useState } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
/* import LocalizationProvider from '@material-ui/lab/LocalizationProvider'; */
import List from '../../components/List/List';

const CompletedTasks = () => {
    return (
        <div className='container'>
            <h1>Completed Tasks</h1>
            <div className='comleted_list'>
                <div>
                    <MuiPickersUtilsProvider>
                        <KeyboardDatePicker
                            margin="normal"
                            format="yyyy-MM-dd"
                            variant="inline"
                            KeyboardButtonProps ={{ "aria-label" : "change date" }}
                        />
                    </MuiPickersUtilsProvider>

                    <MuiPickersUtilsProvider>
                        <KeyboardDatePicker
                            margin="normal"
                            format="yyyy-MM-dd"
                            variant="inline"
                            KeyboardButtonProps ={{ "aria-label" : "change date" }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <List isListDone />
            </div>
        </div>
    )
}

export default CompletedTasks;