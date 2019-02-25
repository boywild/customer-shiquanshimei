import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getLog = (param) => createAsyncAction('GET_LOG', () => api.post('/helplog/query', param));

export default {
    getLog
};
