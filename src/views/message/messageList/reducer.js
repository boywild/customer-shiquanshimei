import createReducer from 'utils/createReducer';

const defaultState = () => ({
    outlets: [],
    totalCount: 0
});

const getSuccess = (state, action) => ({
    ...state,
    msgList: action.payload,
    totalCount: action.totalCount
});

export default createReducer(defaultState, {
    GET_MSG_SUCCESS: getSuccess
});
