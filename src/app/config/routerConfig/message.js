/*
 * @Author: chentian
 * @Date: 2019-02-23 15:16:57
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:16:57
 */
import WorkInProgress from 'views/workInProgress';
// import Unauthorized from 'views/unauthorized';
import MessageList from 'views/message/messageList';
import MessageAdd from 'views/message/messageAdd';

const messageRouter = [
    {
        path: '/message/msglist',
        exact: true,
        // permissions: ['god'],
        component: MessageList,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/message/msglist']
    },
    {
        path: '/message/msgadd',
        exact: true,
        // permissions: ['god'],
        component: MessageAdd,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/message/msgadd']
    }
];

export default messageRouter;
