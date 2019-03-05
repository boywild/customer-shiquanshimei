/*
 * @Author: chentian
 * @Date: 2019-02-23 15:16:13
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:16:13
 */
// import WorkInProgress from 'views/workInProgress';
import Promotion from 'views/system/promotion';
import Share from 'views/system/share';
import System1 from 'views/system/systemSetting1';
import System2 from 'views/system/systemSetting2';
import Qr from 'views/system/qr';
import Pageinfo from 'views/system/pageinfo';

const systemRouter = [
    {
        path: '/system',
        exact: true,
        redirect: '/system/setting1',
        pageTitle: 'pageTitle_system'
    },
    {
        path: '/system/setting1',
        exact: true,
        permissions: ['admin', 'user'],
        redirect: '/login',
        component: System1,
        pageTitle: 'pageTitle_system_setting1',
        breadcrumb: ['/system', '/system/setting1']
    },
    {
        path: '/system/setting2',
        exact: true,
        permissions: ['admin', 'user'],
        redirect: '/login',
        component: System2,
        pageTitle: 'pageTitle_system_setting2',
        breadcrumb: ['/system', '/system/setting2']
    },
    {
        path: '/system/promotion',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: Promotion,
        pageTitle: 'pageTitle_system_promotion',
        breadcrumb: ['/system', '/system/promotion']
    },
    {
        path: '/system/qr',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: Qr,
        pageTitle: 'pageTitle_system_qr',
        breadcrumb: ['/system', '/system/qr']
    },
    {
        path: '/system/pageinfo',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: Pageinfo,
        pageTitle: 'pageTitle_system_pageinfo',
        breadcrumb: ['/system', '/system/pageinfo']
    },
    {
        path: '/system/share',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: Share,
        pageTitle: 'pageTitle_system_share',
        breadcrumb: ['/system', '/system/share']
    }
];

export default systemRouter;
