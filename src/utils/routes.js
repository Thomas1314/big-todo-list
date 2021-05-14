import React from 'react';

const Main = React.lazy(() => import('../pages/Main/Main'));
const CompletedTasks = React.lazy(() => import('../pages/CompletedTasks/CompletedTasks'));

const routes = [
    {
        path: "/main",
        component: Main
    },
    {
        path: "/completedTasks",
        component: CompletedTasks
    }
];

export default routes;