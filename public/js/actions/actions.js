//contains action creators
import axios from 'axios';
import debounce from 'lodash.debounce';

import {ActionTypes as types} from '../constants';
export function changeOriginAmount(newAmount) {
    return {
        type: types.CHANGE_ORIGIN_AMOUNT,
        data: {newAmount: newAmount}
    }
}

export function fetchConversionRate(payload) {
    return (dispatch) => {
        makeConversionAjaxCall(payload, dispatch);
    }
}
function _makeConvertionAjaxCall(payload,dispatch){
    dispatch({type: "REQUEST_CONVERSION_RATE", data: payload});
    // ajax call for destination amount
    // originCurrency, destCurrency, originAmount
    axios.get('/api/conversion', {
        params: payload
    })
        .then((resp) => {
            dispatch({type: "RECEIVED_CONVERSION_RATE_SUCCESS", data: resp.data});
        })
        .catch((err) => {
                dispatch({type: "RECEIVED_CONVERSION_RATE_FAILURE", data: err});
            }
        );
}
var makeConversionAjaxCall = debounce(_makeConvertionAjaxCall,300);

export function fetchFees(payload) {
    return (dispatch) => {
        makeFeesAjaxCall(payload, dispatch);
    }
}

function _makeFeesAjaxCall(payload,dispatch){
    dispatch({type: "REQUEST_FEES", data: payload});

    axios.get('/api/fees', {
        params: payload
    })
        .then((resp) => {
            dispatch({type: "RECEIVED_FEES_SUCCESS", data: resp.data});
        })
        .catch((err) => {
                dispatch({type: "RECEIVED_FEES_FAILURE", data: err});
            }
        );
}
var makeFeesAjaxCall = debounce(_makeFeesAjaxCall,300);