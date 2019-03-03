import createReducer from 'utils/createReducer';

const defaultState = () => ({
    shareOpt: {}
});

const getShareOptSuccess = (state, action) => ({
    ...state,
    shareOpt: action.payload
});

export default createReducer(defaultState, {
    GET_SHARE_OPT_SUCCESS: getShareOptSuccess
});
