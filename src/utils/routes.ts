import { Main } from '../pages/Main';
import { Settings } from '../pages/Settings';
import { CompletedTasks } from '../pages/CompletedTasks';
import React from 'react';

export type CompinentsType = {
  path: string;
  Component: React.FC;
};

export const routes: CompinentsType[] = [
  {
    path: '/todo',
    Component: Main,
  },
  {
    path: '/doneTasks',
    Component: CompletedTasks,
  },
  {
    path: '/settings',
    Component: Settings,
  },
  {
    path: '/',
    Component: Main,
  },
];
