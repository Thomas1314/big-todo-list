import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import TaskItem, { TaskType } from './TaskItem';
import FlipMove from 'react-flip-move';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CategoryType } from '../types/types';
import Preloader from './Preloader/Preloader';

type PropsType = {
  tasks: Array<TaskType>;
  end: number;
  setEnd: (end: number) => void;
  categories: CategoryType[];
  isListDone: boolean;
};

export const List: React.FC<PropsType> = ({
  tasks,
  end,
  setEnd,
  categories,
  isListDone,
}) => {
  const [sortTasks, setSortTasks] = useState<TaskType[]>(tasks);
  const [tasksLength, setTasksLength] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setSortTasks(
      tasks
        .filter((task) => task.isDone === isListDone)
        .sort((a) => (a.isFavorite ? -1 : 1))
    );
  }, [tasks]);

  useEffect(() => {
    end <= tasks.length ? setHasMore(true) : setHasMore(false);
    setTasksLength(tasks.length);
  }, [tasks.length, end]);
  return (
    <Grid container>
      <InfiniteScroll
        dataLength={tasksLength}
        next={() => setEnd(end + 4)}
        hasMore={hasMore}
        loader={<Preloader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>You have seen it all</b>
          </p>
        }
      >
        <FlipMove>
          {sortTasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                isListDone={isListDone}
                setEnd={setEnd}
                end={end}
                categories={categories}
              />
            );
          })}
        </FlipMove>
      </InfiniteScroll>
    </Grid>
  );
};
