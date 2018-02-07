import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';


var defaultSate = {
    originAmount:'0.00',
    destinationAmount:'0.00',
    conversionRate: 1.5
};

//dispatch -> reducer (amount) -> returns state -> new redux state
//reducer
function amount(state = defaultSate ,action){
    if(action.type==='CHANGE_ORIGIN_AMOUNT'){
        //return Object.assign({}, state,{originAmount:action.data});
        return {
            ...state,
            originAmount: action.data.newAmount
        }
    }
    else if(action.type==='RECEIVED_CONVERSION_RATE_SUCCESS'){
        return {
            ...state,
            conversionRate: action.data.xRate,
            destinationAmount: action.data.destAmount
        }
    }
    return state;
}
var logger = createLogger({collapsed: true});
var store = createStore(amount, applyMiddleware(thunk, logger)); //logger needs to be last parameter

export default store;