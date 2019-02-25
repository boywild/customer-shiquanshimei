import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const saveMsg = (param) => createAsyncAction('SAVE_MSG', () => api.post('/announce/save', param));

export default {
    saveMsg
};
