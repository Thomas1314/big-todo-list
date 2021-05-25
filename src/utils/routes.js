import { Main } from '../pages/Main';
import { Settings } from '../pages/Settings';
import { CompletedTasks } from '../pages/CompletedTasks';

export const routes = [
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
