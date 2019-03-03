/*
 * @Author: chentian
 * @Date: 2019-02-25 11:34:40
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:34:40
 */
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getBasicSet = (param = {}) =>
    createAsyncAction('GET_BASE_SET', () => api.post('/basicExtend/getBasicExtend', param));
const saveBasicSet = (param = {}) =>
    createAsyncAction('SAVE_BASE_SET', () => api.post('/basicExtend/setBasicExtend', param));
const getBasicGroup = (param = {}) =>
    createAsyncAction('GET_BASE_GROUP', () => api.post('/basicExtend/getDefaultSuperior', param));
const saveBasicGroup = (param = {}) =>
    createAsyncAction('SAVE_BASE_GROUP', () => api.post('/basicExtend/setDefaultSuperior', param));

export default {
    getBasicSet,
    saveBasicSet,
    getBasicGroup,
    saveBasicGroup
};
