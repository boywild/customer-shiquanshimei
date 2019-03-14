/*
 * @Author: chentian
 * @Date: 2019-02-25 11:34:40
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:34:40
 */
import { message } from 'antd';
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getPageInfo = () => createAsyncAction('GET_PAGE_INFO', () => api.get('/pageShow/getPageShow'));

const savePageInfo = (param = {}) => {
    const action = createAsyncAction('SAVE_PAGE_INFO', () => api.post('/pageShow/setPageShow', param));
    return (dispatch) =>
        action(dispatch).then((callbackAction) => {
            if (callbackAction.type === 'SAVE_PAGE_INFO_SUCCESS') {
                message.info('保存成功', 1.5);
            }
        });
};

const getBanner = (param = {}) => createAsyncAction('GET_BANNER', () => api.post('/bannerp/getBannerp', param));
const saveBanner = (param = {}) => createAsyncAction('SAVE_BANNER', () => api.post('/bannerp/setBannerp', param));

export default {
    getPageInfo,
    savePageInfo,
    getBanner,
    saveBanner
};
