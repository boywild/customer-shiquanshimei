import createReducer from 'utils/createReducer';

const defaultState = () => ({
    logoDb: []
});

const getSuccess = (state, action) => ({
    ...state,
    logoDb: action.payload
});

export default createReducer(defaultState, {
    GET_LOG_SUCCESS: getSuccess
});
