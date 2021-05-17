import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TaskInput from "../../components/TaskInput/TaskInput";
import List from "../../components/List/List";


const Main = () => {
    return (
        <div>
            <div className="main_title">
                <h1>Tasks</h1>
            </div>
            <div className="main_list">
                <div className="AppTaskCreator">
                    <TaskInput />
                </div>

                <div>
                    <h5>Фильтрация по периоду:</h5>
                    <div className='AppListDateFilter'>
                        <span className="AppText">с</span>
                <MuiPickersUtilsProvider>
                    <KeyboardDatePicker
                        variant="inline"
                        format="dd-MM-yyyy"
                        margin="normal"
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                        disableToolbar
                    />
                </MuiPickersUtilsProvider>
                        <span className="AppText">по</span>
                <MuiPickersUtilsProvider>
                    <KeyboardDatePicker
                        variant="inline"
                        format="dd-MM-yyyy"
                        margin="normal"
                    />
                </MuiPickersUtilsProvider>
                    </div>
                    <Button
                        variant="outlined"
                        /* onClick={setSelectDate} */
                    >
                        Filter
                    </Button>
                </div>
                <List isListDone={false} />
            </div>
        </div>
    );
};

export default Main;
