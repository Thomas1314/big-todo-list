import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  Paper: {
    margin: 'auto',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    width: 500,
  },
  task: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  editField: {
    width: '350px',
  },

  taskProperies: {
    display: 'flex',
    alignItems: 'center',
  },

  submit: {
    height: '25px',
    width: '40px',
  },

  taskTitle: {
    display: 'flex',
    justifyContent: 'center',
  },
  taskTitleWithEdit: {
    display: 'flex',
    justifyContent: 'center',
  },
  taskEditForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '30px',
    boxSizing: 'border-box',
  },
  taskButtons: {
    marginLeft: 'auto',
  },
}));
