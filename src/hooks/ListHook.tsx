import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTasksFromState,
  getCategoriesFromState,
  getIsFetching,
  getEndNumber,
  getDoneTasksFromState,
} from '../redux/selectors/selectors';
import { getDefaultCategory, getCategories } from '../redux/actions';
import { useHistory } from 'react-router-dom';

const ListHook = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const tasks = useSelector(getDoneTasksFromState);

  const unDoneTasks = useSelector(getTasksFromState);
  const categories = useSelector(getCategoriesFromState);
  const isFetching = useSelector(getIsFetching);
  const endNumber = useSelector(getEndNumber);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getDefaultCategory());
  }, []);

  return {
    tasks,
    unDoneTasks,
    categories,
    isFetching,
    dispatch,
    endNumber,
    history,
  };
};

export default ListHook;
