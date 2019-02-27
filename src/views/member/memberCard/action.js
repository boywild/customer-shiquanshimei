import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getOutlets = () => createAsyncAction('OUTLETS_GET', () => api.get('/outlets'));
const getMemberList = (param) => createAsyncAction('GET_MEMBER_LIST', () => api.post('/user/selectByCondition', param));

export default {
    getOutlets,
    getMemberList
};
