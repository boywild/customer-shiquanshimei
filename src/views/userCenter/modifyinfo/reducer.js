import createReducer from 'utils/createReducer';

const defaultState = () => ({
    outlets: []
});

const saveSuccess = (state) => ({
    ...state
});

export default createReducer(defaultState, {
    SAVE_USER_INFO_SUCCESS: saveSuccess
});
