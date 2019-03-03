import createReducer from 'utils/createReducer';

const defaultState = () => ({
    outlets: []
});

const getSetting1 = (state, action) => ({
    ...state,
    sysSetting1: action.payload
});

export default createReducer(defaultState, {
    GET_SYS_SETTING1_SUCCESS: getSetting1
});
