import createReducer from 'utils/createReducer';

const defaultState = () => ({
    logoDb: [],
    totalCount: 0
});

const getSuccess = (state, action) => ({
    ...state,
    logoDb: action.payload,
    totalCount: action.totalCount
});

export default createReducer(defaultState, {
    GET_LOG_SUCCESS: getSuccess
});
