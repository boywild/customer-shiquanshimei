/*
 * @Author: chentian
 * @Date: 2019-02-23 13:00:43
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 13:00:43
 */
import outlets from './outlets/reducer';
import outletDetail from './outletDetail/reducer';
import modifyinfo from './userCenter/modifyinfo/reducer';
import memberinfo from './userCenter/memberinfo/reducer';
// import userinfo from './userCenter/userinfo/reducer';

import message from './message/messageList/reducer';
import messageadd from './message/messageAdd/reducer';
import logList from './log/logList/reducer';
import assessorPage from './assessor/assessorList/reducer';
import productListPage from './product/productList/reducer';

import memberListPage from './member/memberList/reducer';
import memberCardPage from './member/memberCard/reducer';
import updatePage from './system/promotion/reducer';
import systemSetting1Page from './system/systemSetting1/reducer';
import systemSetting2Page from './system/systemSetting2/reducer';
import qrPage from './system/qr/reducer';
import pageinfoPg from './system/pageinfo/reducer';
import sharePage from './system/share/reducer';

import app from './app-reducer';

export default {
    app,
    outlets,
    outletDetail,
    modifyinfo,
    memberinfo,
    message,
    messageadd,
    logList,
    memberListPage,
    memberCardPage,
    updatePage,
    systemSetting1Page,
    systemSetting2Page,
    qrPage,
    pageinfoPg,
    sharePage,
    assessorPage,
    productListPage
};
