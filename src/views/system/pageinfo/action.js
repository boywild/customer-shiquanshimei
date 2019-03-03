/*
 * @Author: chentian
 * @Date: 2019-02-25 11:34:40
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:34:40
 */
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getPageInfo = () => createAsyncAction('GET_PAGE_INFO', () => api.get('/pageShow/getPageShow'));
const savePageInfo = (param = {}) =>
    createAsyncAction('SAVE_PAGE_INFO', () => api.post('/pageShow/setPageShow', param));

const getBanner = (param = {}) => createAsyncAction('GET_BANNER', () => api.post('/bannerp/getBannerp', param));
const saveBanner = (param = {}) => createAsyncAction('SAVE_BANNER', () => api.post('/bannerp/setBannerp', param));

export default {
    getPageInfo,
    savePageInfo,
    getBanner,
    saveBanner
};
