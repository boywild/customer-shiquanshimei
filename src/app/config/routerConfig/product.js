/*
 * @Author: chentian
 * @Date: 2019-03-03 15:47:42
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-03-03 15:47:42
 */
import Unauthorized from 'views/unauthorized';
import ProductList from 'views/product/productList';
// import Outlets from 'views/outlets';
const assessorRouter = [
    {
        path: '/product',
        exact: true,
        redirect: '/product/productlist',
        pageTitle: 'pageTitle_product'
    },
    {
        path: '/product/productlist',
        exact: true,
        permissions: ['admin', 'user'],
        component: ProductList,
        unauthorized: Unauthorized,
        pageTitle: 'pageTitle_product_productList',
        breadcrumb: ['/product', '/product/productlist']
    }
];

export default assessorRouter;
