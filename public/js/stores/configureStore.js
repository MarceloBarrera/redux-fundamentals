import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

var defaultSate = {
    originAmount:'0.00'
};

//reducer
function amount(state = defaultSate ,action){
    if(action.type==='CHANGE_ORIGIN_AMOUNT'){
        //return Object.assign({}, state,{originAmount:action.data});
        return {
            ...state,
            originAmount: action.data.newAmount
        }
    }
    return state;
}

var store = createStore(amount, applyMiddleware(logger));

export default store;