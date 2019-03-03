/*
 * @Author: chentian
 * @Date: 2019-02-25 11:53:14
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:53:14
 */
import createReducer from 'utils/createReducer';

const defaultState = () => ({
    baseSetting: {},
    baseGroupSetting: {}
});

const getBaseSuccess = (state, action) => ({
    ...state,
    baseSetting: action.payload
});
const geGroupSuccess = (state, action) => ({
    ...state,
    baseGroupSetting: action.payload
});

export default createReducer(defaultState, {
    GET_BASE_SET_SUCCESS: getBaseSuccess,
    GET_BASE_GROUP_SUCCESS: geGroupSuccess
});
