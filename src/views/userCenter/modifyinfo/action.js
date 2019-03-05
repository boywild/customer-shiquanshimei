import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const saveUserInfo = (param = {}) => createAsyncAction('SAVE_USER_INFO', () => api.post('/admin/save', param));

export default {
    saveUserInfo
};
