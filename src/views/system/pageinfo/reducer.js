/*
 * @Author: chentian
 * @Date: 2019-02-25 11:53:18
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:53:18
 */
import createReducer from 'utils/createReducer';

const defaultState = () => ({
    outlets: []
});

const getSuccess = (state, action) => ({
    ...state,
    outlets: action.payload
});

export default createReducer(defaultState, {
    OUTLETS_GET_SUCCESS: getSuccess
});
