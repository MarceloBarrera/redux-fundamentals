export function changeOriginAmount(newAmount) {
    return {
        type:"CHANGE_ORIGIN_AMOUNT",
        data:{newAmount: newAmount}
    }
}

export function someAsyncfunction(payload){
    return (dispatch)=> {

            dispatch({type: "REQUEST_CONVERSION_RATE", data: payload});
            // get the new dest amount
            this.makeConversionAjaxCall(payload, (resp) => {
                this.clearErrorMessage();
                dispatch({type: "RECEIVED_CONVERSION_RATE", data: resp});
            }, this.handleAjaxFailure);


    }
}



