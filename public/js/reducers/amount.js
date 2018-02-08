
import {ActionTypes as types} from '../constants';

var defaultSate = {
    originAmount:'0.00',
    destinationAmount:'0.00',
    conversionRate: 1.5,
    feeAmount: 0.00,
    //conversionRate: 1.5,
    totalCost: 0.00,
};

//dispatch -> reducer (amount) -> returns state -> new redux state
//reducer
function amount(state = defaultSate ,action){
    switch (action.type) {
        case ('CHANGE_ORIGIN_AMOUNT'):
            return {
                ...state,
                originAmount: action.data.newAmount
            };
        case ('RECEIVED_CONVERSION_RATE_SUCCESS'):
            return {
                ...state,
                conversionRate: action.data.xRate,
                destinationAmount: action.data.destAmount
            };
        case ('RECEIVED_FEES_SUCCESS'):
            var newFeeAmount = action.data.feeAmount;
            var newTotal = parseFloat(state.originAmount, 10) + parseFloat(newFeeAmount, 10);

            return {
                ...state,
                feeAmount: newFeeAmount,
                totalCost: newTotal
            };

        default:
            return state;
    }
}

export default amount;