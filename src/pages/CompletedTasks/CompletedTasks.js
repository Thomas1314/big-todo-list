import React, { useState } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
/* import LocalizationProvider from '@material-ui/lab/LocalizationProvider'; */
import List from '../../components/List';

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
                        />
                    </MuiPickersUtilsProvider>

                    <MuiPickersUtilsProvider>
                        <KeyboardDatePicker />
                    </MuiPickersUtilsProvider>
                </div>
                <List />
            </div>
        </div>
    )
}

export default CompletedTasks;