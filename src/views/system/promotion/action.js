import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getUpdateSetting = (param) =>
    createAsyncAction('GET_UPDATE_SETTING', () => api.post('/upgradeMoney/getUpgradeMoney', param));
const saveUpdateSetting = (param) =>
    createAsyncAction('SAVE_UPDATE_SETTING', () => api.post('/upgradeMoney/setUpgradeMoney', param));

export default {
    getUpdateSetting,
    saveUpdateSetting
};
