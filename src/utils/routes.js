import React from 'react';
import withSuspense from '../hoc/withSuspense';

const Main = React.lazy(() => import('../pages/Main/Main'));
const CompletedTasks = React.lazy(() => import('../pages/CompletedTasks/CompletedTasks'));

const SuspendedMain = withSuspense(Main);
const SuspendedCompletedTasks = withSuspense(CompletedTasks);


const routes = [
    {
        path: "/main",
        Component: SuspendedMain
    },
    {
        path: "/completedTasks",
        Component: SuspendedMain
    },
    {
        path: "/",
        Component: SuspendedMain
    }
];

export default routes;