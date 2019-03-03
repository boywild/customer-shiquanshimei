/*
 * @Author: chentian
 * @Date: 2019-02-25 10:57:11
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 10:57:11
 */
import createReducer from 'utils/createReducer';

const defaultState = () => ({
    updateSetting: {}
});

const getUpdateSuccess = (state, action) => ({
    ...state,
    updateSetting: action.payload
});

export default createReducer(defaultState, {
    GET_UPDATE_SETTING_SUCCESS: getUpdateSuccess
});
