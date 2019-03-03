/*
 * @Author: chentian
 * @Date: 2019-02-25 11:34:40
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:34:40
 */
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getQrDb = (param = {}) => createAsyncAction('GET_QR_DB', () => api.post('/qrCode/getQrCode', param));
const saveQrDb = (param = {}) => createAsyncAction('SAVE_QR_DB', () => api.post('/qrCode/setQrCode', param));
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
