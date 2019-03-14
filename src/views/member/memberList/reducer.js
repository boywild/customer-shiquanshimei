import createReducer from 'utils/createReducer';

const defaultState = () => ({
    memberList: [],
    totalCount: 0
});

const getMemberSuccess = (state, action) => ({
    ...state,
    memberList: action.payload,
    totalCount: action.totalCount
});

export default createReducer(defaultState, {
    GET_MEMBER_LIST_SUCCESS: getMemberSuccess
});
