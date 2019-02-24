/*
 * @Author: chentian
 * @Date: 2019-02-23 15:16:13
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:16:13
 */
import WorkInProgress from 'views/workInProgress';
const systemRouter = [
    {
        path: '/system/setting1',
        exact: true,
        permissions: ['admin', 'user'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/system/setting1']
    },
    {
        path: '/system/setting2',
        exact: true,
        permissions: ['admin', 'user'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/system/setting2']
    },
    {
        path: '/system/promotion',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/system/promotion']
    },
    {
        path: '/system/qr',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/system/qr']
    },
    {
        path: '/system/pageinfo',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/system/pageinfo']
    },
    {
        path: '/system/share',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/system/share']
    }
];

export default systemRouter;
