import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getLog = () =>
    createAsyncAction('OUTLETS_GET', () =>
        api.post('/helplog/query', {
            content: '',
            pageNum: 1,
            pageSize: 10
        })
    );

export default {
    getLog
};
