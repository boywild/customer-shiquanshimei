import { message } from 'antd';
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getUpdateSetting = (param) =>
    createAsyncAction('GET_UPDATE_SETTING', () => api.post('/upgradeMoney/getUpgradeMoney', param));
const saveUpdateSetting = (param = {}) => {
    const action = createAsyncAction('SAVE_UPDATE_SETTING', () => api.post('/upgradeMoney/setUpgradeMoney', param));
    return (dispatch) =>
        action(dispatch).then((callbackAction) => {
            if (callbackAction.type === 'SAVE_UPDATE_SETTING_SUCCESS') {
                message.info('保存成功', 1.5);
            }
        });
};
export default {
    getUpdateSetting,
    saveUpdateSetting
};
