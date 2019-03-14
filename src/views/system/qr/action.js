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

const getQrDb = (param = {}) => createAsyncAction('GET_QR_DB', () => api.post('/qrCode/getQrCode', param));
const saveQrDb = (param = {}) => {
    const action = createAsyncAction('SAVE_QR_DB', () => api.post('/qrCode/setQrCode', param));
    return (dispatch) =>
        action(dispatch).then((callbackAction) => {
            if (callbackAction.type === 'SAVE_QR_DB_SUCCESS') {
                message.info('保存成功', 1.5);
            }
        });
};
const changeQrDb = (val, type) => ({
    type: 'CHANGE_QR_DB',
    payload: val,
    inputType: type
});

export default {
    getQrDb,
    saveQrDb,
    changeQrDb
};
