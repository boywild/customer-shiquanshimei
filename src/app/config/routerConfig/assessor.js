/*
 * @Author: chentian
 * @Date: 2019-02-23 15:17:21
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:17:21
 */
// import OutletDetail from 'views/outletDetail';
import Unauthorized from 'views/unauthorized';
import AssessorList from 'views/assessor/assessorList';

const assessorRouter = [
    {
        path: '/assessor',
        exact: true,
        permissions: ['admin', 'user'],
        component: AssessorList,
        unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outletDetail',
        breadcrumb: ['/assessor']
    }
];

export default assessorRouter;
