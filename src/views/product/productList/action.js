/*
 * @Author: chentian
 * @Date: 2019-03-03 15:56:20
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-03-03 15:56:21
 */
import api from 'utils/api';
import createAsyncAction from 'utils/createAsyncAction';

const getProduct = (param = {}) => createAsyncAction('GET_PRODUCT', () => api.post('/appProduct/query', param));

export default {
    getProduct
};
