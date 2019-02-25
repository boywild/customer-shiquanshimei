import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getMsg = (param) => createAsyncAction('GET_MSG', () => api.post('/announce/query', param));

export default {
    getMsg
};
