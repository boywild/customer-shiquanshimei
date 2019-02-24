import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getOutlets = () =>
    createAsyncAction('OUTLETS_GET', () =>
        api.post('/announce/query', {
            content: '公告内容',
            pageNum: 1,
            pageSize: 10
        })
    );

export default {
    getOutlets
};
