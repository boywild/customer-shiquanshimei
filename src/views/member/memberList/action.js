import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getMemberList = (param) => createAsyncAction('GET_MEMBER_LIST', () => api.post('/user/selectByCondition', param));

const deleteMember = (param, listParam) => {
    const action = createAsyncAction('DELETE_MEMBER', () => api.post('/user/updateDeleteFlag', param));
    return (dispatch) =>
        action(dispatch).then((callbackAction) => {
            if (callbackAction.type === 'DELETE_MEMBER_SUCCESS') {
                return getMemberList(listParam)(dispatch);
            }
        });
};

export default {
    getMemberList,
    deleteMember
};
