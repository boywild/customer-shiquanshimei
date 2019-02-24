/*
 * @Author: chentian
 * @Date: 2019-02-23 13:29:23
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 13:29:23
 */
import systemRouter from './system';
import memberRouter from './member';
import assessorRouter from './assessor';
import messageRouter from './message';
import logRouter from './log';
import userCenterRouter from './userCenter';

import Login from 'views/login';


const authorizedRoutes = [
    ...systemRouter,
    ...memberRouter,
    ...assessorRouter,
    ...messageRouter,
    ...logRouter,
    ...userCenterRouter
];

const normalRoutes = [
    {
        path: '/',
        exact: true,
        redirect: '/outlets'
    },
    {
        path: '/login',
        exact: true,
        component: Login
    }
];

const combineRoutes = [...authorizedRoutes, ...normalRoutes];

export { authorizedRoutes, normalRoutes, combineRoutes };
