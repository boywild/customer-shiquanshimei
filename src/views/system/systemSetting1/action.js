/*
 * @Author: chentian
 * @Date: 2019-02-25 11:34:40
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:34:40
 */
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getSysSetting1 = () => createAsyncAction('GET_SYS_SETTING1', () => api.get('/basic/getBasic'));
const saveSysSetting1 = (param) => createAsyncAction('SAVE_SYS_SETTING1', () => api.post('/basic/setBasic', param));

export default {
    getSysSetting1,
    saveSysSetting1
};
