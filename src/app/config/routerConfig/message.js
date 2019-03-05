/*
 * @Author: chentian
 * @Date: 2019-02-23 15:16:57
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:16:57
 */
// import WorkInProgress from 'views/workInProgress';
// import Unauthorized from 'views/unauthorized';
// import Outlets from 'views/outlets';
import MessageList from 'views/message/messageList';
import MessageAdd from 'views/message/messageAdd';

const messageRouter = [
    {
        path: '/message',
        exact: true,
        redirect: '/message/msglist',
        pageTitle: 'pageTitle_message'
    },
    {
        path: '/message/msglist',
        exact: true,
        // permissions: ['god'],
        component: MessageList,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_message_msglist',
        breadcrumb: ['/message', '/message/msglist']
    },
    {
        path: '/message/msgadd',
        exact: true,
        // permissions: ['god'],
        component: MessageAdd,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_message_msgadd',
        breadcrumb: ['/message', '/message/msgadd']
    }
];

export default messageRouter;
