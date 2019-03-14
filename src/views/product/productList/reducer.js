/*
 * @Author: chentian
 * @Date: 2019-03-03 15:56:21
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-03-03 15:56:21
 */
import createReducer from 'utils/createReducer';

const defaultState = () => ({
    productList: [],
    totalCount: 0
});

const getProSuccess = (state, action) => ({
    ...state,
    productList: action.payload,
    totalCount: action.totalCount
});

export default createReducer(defaultState, {
    GET_PRODUCT_SUCCESS: getProSuccess
});
