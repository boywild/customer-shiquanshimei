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

const getShareOpt = (param = {}) => createAsyncAction('GET_SHARE_OPT', () => api.post('/sharep/getSharep', param));
const saveShareOpt = (param = {}) => {
    const action = createAsyncAction('SAVE_SHARE_OPT', () => api.post('/sharep/setSharep', param));
    return (dispatch) =>
        action(dispatch).then((callbackAction) => {
            if (callbackAction.type === 'SAVE_SHARE_OPT_SUCCESS') {
                message.info('保存成功', 1.5);
            }
        });
};
export default {
    getShareOpt,
    saveShareOpt
};
