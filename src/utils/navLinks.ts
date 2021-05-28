export type LinksType = {
  to: string;
  title: string;
};

export const navTabs: LinksType[] = [
  {
    to: '/todo',
    title: 'Main',
  },
  {
    to: '/doneTasks',
    title: 'Completed Tasks',
  },
  {
    to: '/settings',
    title: 'Settings',
  },
];
