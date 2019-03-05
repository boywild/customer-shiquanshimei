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
        path: '/usercenter',
        exact: true,
        redirect: '/usercenter/modifyinfo',
        pageTitle: 'pageTitle_usercenter'
    },
    {
        path: '/usercenter/modifyinfo',
        exact: true,
        // permissions: ['god'],
        component: Modifyinfo,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_usercenter_modifyinfo',
        breadcrumb: ['/usercenter', '/usercenter/modifyinfo']
    },
    {
        path: '/usercenter/memberinfo',
        exact: true,
        // permissions: ['god'],
        component: Memberinfo,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_usercenter_memberinfo',
        breadcrumb: ['/usercenter', '/usercenter/memberinfo']
    },
    {
        path: '/usercenter/userinfo',
        exact: true,
        // permissions: ['god'],
        component: Userinfo,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_usercenter_userinfo',
        breadcrumb: ['/usercenter', '/usercenter/userinfo']
    }
];

export default userCenterRouter;
