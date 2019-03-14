import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const saveUserInfo = (param = {}) => {
    const action = createAsyncAction('SAVE_USER_INFO', () => api.post('/admin/save', param));
    return (dispatch) =>
        action(dispatch).then((callbackAction) => {
            if (callbackAction.type === 'SAVE_USER_INFO_SUCCESS') {
                message.info('保存成功', 1.5);
            }
        });
};
export default {
    saveUserInfo
};
