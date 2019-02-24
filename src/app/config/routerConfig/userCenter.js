/*
 * @Author: chentian
 * @Date: 2019-02-23 15:23:36
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:23:36
 */
// import WorkInProgress from 'views/workInProgress';
// import Unauthorized from 'views/unauthorized';
import Modifyinfo from 'views/userCenter/modifyinfo';
import Memberinfo from 'views/userCenter/memberinfo';
import Userinfo from 'views/userCenter/userinfo';

const userCenterRouter = [
    {
        path: '/usercenter/modifyinfo',
        exact: true,
        // permissions: ['god'],
        component: Modifyinfo,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/usercenter/modifyinfo']
    },
    {
        path: '/usercenter/memberinfo',
        exact: true,
        // permissions: ['god'],
        component: Memberinfo,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/usercenter/memberinfo']
    },
    {
        path: '/usercenter/userinfo',
        exact: true,
        // permissions: ['god'],
        component: Userinfo,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/usercenter/userinfo']
    }
];

export default userCenterRouter;
