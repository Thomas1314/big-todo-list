import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import TaskItem from './TaskItem';
import FlipMove from 'react-flip-move';
import InfiniteScroll from 'react-infinite-scroll-component';

export const List = ({ tasks, end, setEnd, categories, isListDone }) => {
  const [sortTasks, setSortTasks] = useState(tasks);
  const [tasksLength, setTasksLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setSortTasks(
      tasks
        .filter((task) => task.isDone === isListDone)
        .sort((a) => (a.isFavorite ? -1 : 1))
    );
  }, [tasks]);

  /* useEffect(() => {
    end <= tasks.length ? setHasMore(true) : setHasMore(false);
    setTasksLength(tasks.length);
  }, [tasks.length, end]); */

  return (
    <Grid container>
      {/* <InfiniteScroll
        dataLength={tasksLength}
        next={() => setEnd(end + 4)}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>You have seen it all</b>
          </p>
        }
      > */}
      <FlipMove>
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
      </FlipMove>
      {/* </InfiniteScroll> */}
    </Grid>
  );
};
