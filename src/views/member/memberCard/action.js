import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getOutlets = () => createAsyncAction('OUTLETS_GET', () => api.get('/outlets'));
const getMemberCard = (param) => createAsyncAction('GET_MEMBER_CARD', () => api.post('/user/selectByCondition', param));

export default {
    getOutlets,
    getMemberCard
};
