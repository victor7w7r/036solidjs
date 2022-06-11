import type { DataState, DataActions } from '../types';

export const DataReducer = (state: DataState, action: DataActions): DataState => {

    switch(action.type) {
        case 'DATA_SEND_REQUEST':
            return {...state, loading: true};

        case 'DATA_SEND_SUCCESS':
            return {...state, data: action.payload, loading: false};

        case 'DATA_SEND_FAIL':
            return { ...state, data: action.payload, loading: false};

        default: return state;  
    }
};