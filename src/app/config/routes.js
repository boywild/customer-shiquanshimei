import Login from 'views/login';
import Outlets from 'views/outlets';
import OutletDetail from 'views/outletDetail';
import WorkInProgress from 'views/workInProgress';
import Unauthorized from 'views/unauthorized';

const authorizedRoutes = [
    {
        path: '/system/setting1',
        exact: true,
        permissions: ['admin', 'user'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: ''
    },
    {
        path: '/system/setting2',
        exact: true,
        permissions: ['admin', 'user'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: ''
    },
    {
        path: '/system/promotion',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: ''
    },
    {
        path: '/system/qr',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: ''
    },
    {
        path: '/system/pageinfo',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: ''
    },
    {
        path: '/system/share',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: WorkInProgress,
        pageTitle: ''
    },

    {
        path: '/member',
        exact: true,
        permissions: ['admin', 'user'],
        component: Outlets,
        unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/outlets']
    },
    {
        path: 'assessor',
        exact: true,
        permissions: ['admin', 'user'],
        component: OutletDetail,
        unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outletDetail',
        breadcrumb: ['/outlets', '/outlets/:id']
    },
    {
        path: '/message/msglist',
        exact: true,
        permissions: ['god'],
        component: WorkInProgress,
        unauthorized: Unauthorized
    },
    {
        path: '/message/msgadd',
        exact: true,
        permissions: ['god'],
        component: WorkInProgress,
        unauthorized: Unauthorized
    },
    {
        path: '/log/loglist',
        exact: true,
        permissions: ['god'],
        component: WorkInProgress,
        unauthorized: Unauthorized
    },
    {
        path: '/usercenter/modifyinfo',
        exact: true,
        permissions: ['god'],
        component: WorkInProgress,
        unauthorized: Unauthorized
    },
    {
        path: '/usercenter/modifyinfo',
        exact: true,
        permissions: ['god'],
        component: WorkInProgress,
        unauthorized: Unauthorized
    },
    {
        path: '/usercenter/memberinfo',
        exact: true,
        permissions: ['god'],
        component: WorkInProgress,
        unauthorized: Unauthorized
    },
    {
        path: '/usercenter/userinfo',
        exact: true,
        permissions: ['god'],
        component: WorkInProgress,
        unauthorized: Unauthorized
    }
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
