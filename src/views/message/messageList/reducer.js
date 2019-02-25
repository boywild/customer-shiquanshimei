import createReducer from 'utils/createReducer';

const defaultState = () => ({
    outlets: []
});

const getSuccess = (state, action) => ({
    ...state,
    msgList: action.payload
});

export default createReducer(defaultState, {
    GET_MSG_SUCCESS: getSuccess
});
