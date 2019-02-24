/*
 * @Author: chentian
 * @Date: 2019-02-23 15:17:15
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:17:15
 */
import WorkInProgress from 'views/workInProgress';
import Unauthorized from 'views/unauthorized';
import LogList from 'views/log/logList';
const logRouter = [
    {
        path: '/log/loglist',
        exact: true,
        // permissions: ['god'],
        component: LogList,
        unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outletDetail',
        breadcrumb: ['/log/loglist']
    }
];

export default logRouter;
