/*
 * @Author: chentian
 * @Date: 2019-02-23 15:17:05
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:17:05
 */
// import Outlets from 'views/outlets';
// import Unauthorized from 'views/unauthorized';
import MemberCard from 'views/member/memberCard';
import MemberList from 'views/member/memberList';
const memberRouter = [
    {
        path: '/member',
        exact: true,
        redirect: '/member/membercard',
        pageTitle: 'pageTitle_member'
    },
    {
        path: '/member/membercard',
        exact: true,
        permissions: ['admin', 'user'],
        component: MemberCard,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_member_membercard',
        breadcrumb: ['/member', '/member/membercard']
    },
    {
        path: '/member/memberlist',
        exact: true,
        permissions: ['admin', 'user'],
        component: MemberList,
        // unauthorized: Unauthorized,
        pageTitle: 'pageTitle_member_memberlist',
        breadcrumb: ['/member', '/member/memberlist']
    }
];

export default memberRouter;
