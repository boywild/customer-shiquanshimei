/*
 * @Author: chentian
 * @Date: 2019-03-01 20:24:52
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-03-01 20:24:52
 */
import createReducer from 'utils/createReducer';

const defaultState = () => ({
    memberList: [],
    totalCount: 0
});

const getMemberCardSuccess = (state, action) => ({
    ...state,
    memberCard: action.payload,
    totalCount: action.totalCount
});

export default createReducer(defaultState, {
    GET_MEMBER_CARD_SUCCESS: getMemberCardSuccess
});
