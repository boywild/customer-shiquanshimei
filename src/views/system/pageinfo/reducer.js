/*
 * @Author: chentian
 * @Date: 2019-02-25 11:53:18
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:53:18
 */
import createReducer from 'utils/createReducer';

const defaultState = () => ({
    pageInfo: []
});

const getPageInfoSuccess = (state, action) => ({
    ...state,
    pageInfo: action.payload
});

export default createReducer(defaultState, {
    GET_PAGE_INFO_SUCCESS: getPageInfoSuccess
});