import createReducer from 'utils/createReducer';

const defaultState = () => ({
    assessorList: [],
    checkedlist: [],
    totalCount: 0
});

const getAssSuccess = (state, action) => ({
    ...state,
    assessorList: action.payload
});
const getCheckedSuccess = (state, action) => ({
    ...state,
    checkedlist: action.payload,
    totalCount: action.totalCount
});

export default createReducer(defaultState, {
    GET_ASS_LIST_SUCCESS: getAssSuccess,
    GET_CHECKED_LIST_SUCCESS: getCheckedSuccess
});
