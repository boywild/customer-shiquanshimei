import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getAssessorList = (param = {}) => createAsyncAction('GET_ASS_LIST', () => api.post('/user/checkList', param));
const getCheckedList = () => createAsyncAction('GET_CHECKED_LIST', () => api.get('/user/check'));

export default {
    getAssessorList,
    getCheckedList
};
