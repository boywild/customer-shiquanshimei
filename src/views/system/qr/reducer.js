/*
 * @Author: chentian
 * @Date: 2019-02-25 11:53:16
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-25 11:53:16
 */
import createReducer from 'utils/createReducer';

const defaultState = () => ({
    qrCode: {},
    qrCodeLeft: '',
    qrCodeTop: '',
    qrCodeWeight: '',
    qrCodeHeight: ''
});

const getQrSuccess = (state, action) => ({
    ...state,
    qrCode: action.payload
});
const chagneQrDb = (state, action) => {
    switch (action.inputType) {
        case 'qr_left':
            return {
                ...state,
                qrCodeLeft: action.payload
            };

        case 'qr_top':
            return {
                ...state,
                qrCodeTop: action.payload
            };

        case 'qr_width':
            return {
                ...state,
                qrCodeWeight: action.payload
            };

        case 'qr_height':
            return {
                ...state,
                qrCodeHeight: action.payload
            };
    }
};
export default createReducer(defaultState, {
    GET_QR_DB_SUCCESS: getQrSuccess,
    CHANGE_QR_DB: chagneQrDb
});
