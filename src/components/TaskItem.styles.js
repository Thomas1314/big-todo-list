import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '5px',
  },
}));
