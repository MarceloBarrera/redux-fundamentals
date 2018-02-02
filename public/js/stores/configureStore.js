import {createStore} from 'redux';

var defaultSate = {
    originAmount:'0.00'
};

//reducer
function amount(state = defaultSate ,action){
    console.log(state);
    if(action.type==='CHANGE_ORIGIN_AMOUNT'){
        //return Object.assign({}, state,{originAmount:action.data});
        return {
            ...state,
            originAmount: action.data.newAmount
        }
    }
    return state;
}

var store = createStore(amount);

export default store;