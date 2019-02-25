import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getOutlets = () => createAsyncAction('OUTLETS_GET', () => api.get('/outlets'));
const saveMsg = (param) => createAsyncAction('SAVE_MSG', () => api.post('/announce/save', param));

export default {
    getOutlets,
    saveMsg
};
