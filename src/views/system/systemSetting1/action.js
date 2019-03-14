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

const getSysSetting1 = () => createAsyncAction('GET_SYS_SETTING1', () => api.get('/basic/getBasic'));
const saveSysSetting1 = (param) => {
    const action = createAsyncAction('SAVE_SYS_SETTING1', () => api.post('/basic/setBasic', param));
    return (dispatch) =>
        action(dispatch).then((callbackAction) => {
            if (callbackAction.type === 'SAVE_SYS_SETTING1_SUCCESS') {
                message.info('保存成功', 1.5);
            }
        });
};

export default {
    getSysSetting1,
    saveSysSetting1
};
