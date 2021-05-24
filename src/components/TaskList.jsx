import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import TaskItem from './TaskItem';
import ListHook from '../hooks/ListHook';

export const List = ({ isListDone }) => {
  const { tasks, categories } = ListHook();
  const [sortTasks, setSortTasks] = useState(tasks);

  useEffect(() => {
    setSortTasks(
      tasks
        .filter((task) => task.isDone === isListDone)
        .sort((a) => (a.isFavorite ? -1 : 1))
    );
  }, [tasks]);

  return (
    <Grid container>
      {sortTasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            isListDone={isListDone}
            categories={categories}
          />
        );
      })}
    </Grid>
  );
};
