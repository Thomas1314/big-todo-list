export type TabsType = {
  to: string;
  title: string;
};

export const navTabs: TabsType[] = [
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
