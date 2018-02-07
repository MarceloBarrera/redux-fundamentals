//contains action creators
import axios from 'axios';
import debounce from 'lodash.debounce';

export function changeOriginAmount(newAmount) {
    return {
        type: "CHANGE_ORIGIN_AMOUNT",
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