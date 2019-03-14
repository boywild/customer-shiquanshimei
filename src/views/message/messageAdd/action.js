import { message } from 'antd';
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const saveMsg = (param = {}) => {
    const action = createAsyncAction('SAVE_MSG', () => api.post('/announce/save', param));
    return (dispatch) =>
        action(dispatch).then((callbackAction) => {
            if (callbackAction.type === 'SAVE_MSG_SUCCESS') {
                message.info('保存成功', 1.5);
            }
        });
};
export default {
    saveMsg
};
