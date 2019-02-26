import createReducer from 'utils/createReducer';

const defaultState = () => ({
    memberList: []
});

const getMemberSuccess = (state, action) => ({
    ...state,
    memberList: action.payload
});

export default createReducer(defaultState, {
    GET_MEMBER_LIST_SUCCESS: getMemberSuccess
});
