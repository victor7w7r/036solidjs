
import { DataState, ActionTypeData, ActionData } from '../types/TData';

export function dataReducer (state: DataState = { data: "" } , action: ActionData): DataState {
    switch (action.type) {
        case ActionTypeData.DATA_SEND_REQUEST:
            return {
                loading: true
            };
        case ActionTypeData.DATA_SEND_SUCCESS:
            return {
                data: action.text, loading: false
            };
        case ActionTypeData.DATA_SEND_FAIL:
            return {
                data: action.text, loading: false
            };
        case ActionTypeData.DATA_WRITE:
            return {
                data: action.text, loading: false
            };
        default: 
            return state;  
    }
};

export const actions: any = {
    send: (text: string) => ({
        type: ActionTypeData.DATA_WRITE
        , text 
    })
};
