import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getMemberList = () => createAsyncAction('GET_MEMBER_LIST', () => api.post('/user/checkList'));

export default {
    getMemberList
};
