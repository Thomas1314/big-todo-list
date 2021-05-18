/*input*/

<Grid item xs={12}>
        <Paper elevation={2} style={styles.Paper}>
          {/* {edit 
          ? <Input type='text' value={name} onChange={(e) => setName(e.target.value)} /> 
          : <span style={styles.Todo}>{task.title}</span>
          } */}
          <Checkbox /* checked={task.isDone} */ />
          {/* <span>{task.title}</span> */}
             <IconButton
              /* onClick={() => {
                  dispatch(editTodo({
                    ...todo,
                    title: name
                }))
                if (edit) {
                 setName(todo.title);   
                }
                setEdit(!edit);
              */            
              color="primary"
              aria-label="Edit"
              style={styles.Icon}
              >
              {task.isEdit
                  ? <TextField
                    value={changedTaskText}
                    onChange={inputTextChanger}
                    key={task.id + 1}
                    />
                  : isEditStatus
                    ? (<span>{task.title}</span>)
                    : (<Build fontSize="small" /> /* <span onClick={changeTaskHandler}>{task.title}</span> */) 
              }
              {/* {edit ? <Button variant="contained">Update</Button> : <Build fontSize="small" />} */}
              {/* <Build fontSize="small" /> */}
            </IconButton>
          
            <IconButton
              color="secondary"
              aria-label="Delete"
              onClick={deleteChosenTask}
            >
              <Delete fontSize="small" />
            </IconButton>

        </Paper>
      </Grid>

 {/* <Grid item xs={12}>
      <Paper elevation={2} style={styles.Paper}>
        <Checkbox onClick={updateCategoryHandler} />
        {task.isEdit 
        ? <TextField value={changedTaskText} onChange={inputTextChanger} key={task.id + 1} /> 
        : <span style={styles.Todo}>{task.title}</span>
        }
        
           <IconButton
             onClick={() => {
              dispatch(updateTaskText(updateTaskParams))

              if (task.isEdit) {
               setName(task.title);   
              }
              setEdit(!task.isEdit);

            }} 
            color="primary"
            aria-label="Edit"
            style={styles.Icon}
            >
            {/* {task.isEdit
                ? <TextField
                  value={changedTaskText}
                  onChange={inputTextChanger}
                  key={task.id + 1}
                  />
                : isEditStatus
                  ? (<span>{task.title}</span>)
                  : (<span onClick={changeTaskHandler}>{task.title}</span>) 
            } */}
            {task.isEdit ? <Button variant="contained">Update</Button> : <Build fontSize="small" />}
            {/* <Build fontSize="small" /> */}
          </IconButton>
        
          <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={deleteChosenTask}
          >
            <Delete fontSize="small" />
          </IconButton>

      </Paper>
    </Grid>  */}



{/* <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper style={styles.Paper}>
                <TaskInput />
              </Paper>
            </Grid>

            <Grid item xs={12} style={styles.Paper}>
              <Grid container>
                <List />
              </Grid>        
            </Grid>
        </Grid> */}
        


        <div>
            <div className={classes.MainPageTitle}>
                <h1>Tasks</h1>
            </div>
            <div className={classes.MainList}>
                <div>
                    <h5>Фильтрация по периоду:</h5>
                    <div className={classes.MainListDateFilter}>
                    <span className="AppText">с</span>
                <MuiPickersUtilsProvider utils={}>
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

                <Grid item xs={12}>
                    <Paper style={styles.Paper}>
                        <TaskInput />
                    </Paper>
                </Grid>

                <Grid item xs={12} style={styles.Paper}>
                    <Grid container>
                        <List isListDone={false} />
                    </Grid>        
                </Grid>

            </div>
        </div>