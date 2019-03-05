/*
 * @Author: chentian
 * @Date: 2019-02-23 15:17:15
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:17:15
 */
// import WorkInProgress from 'views/workInProgress';
// import Outlets from 'views/outlets';
import Unauthorized from 'views/unauthorized';
import LogList from 'views/log/logList';
const logRouter = [
    {
        path: '/log',
        exact: true,
        redirect: '/log/loglist',
        pageTitle: 'pageTitle_log'
    },
    {
        path: '/log/loglist',
        exact: true,
        // permissions: ['god'],
        component: LogList,
        unauthorized: Unauthorized,
        pageTitle: 'pageTitle_log_loglist',
        breadcrumb: ['/log', '/log/loglist']
    }
];

export default logRouter;
