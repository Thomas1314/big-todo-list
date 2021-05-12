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