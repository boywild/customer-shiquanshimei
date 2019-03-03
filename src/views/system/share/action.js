/*
 * @Author: chentian
 * @Date: 2019-02-25 11:34:40
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:34:40
 */
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getShareOpt = (param = {}) => createAsyncAction('GET_SHARE_OPT', () => api.post('/sharep/getSharep', param));
const saveShareOpt = (param = {}) => createAsyncAction('SAVE_SHARE_OPT', () => api.post('/sharep/setSharep', param));

export default {
    getShareOpt,
    saveShareOpt
};
