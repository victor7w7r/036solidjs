export interface DataState {
    data?: string,
    loading?: boolean;
    success?: boolean;
};

export enum ActionTypeData {
    DATA_SEND_REQUEST = 'DATA_SEND_REQUEST',
    DATA_SEND_SUCCESS = 'DATA_SEND_SUCCESS',
    DATA_SEND_FAIL = 'DATA_SEND_FAIL',
    DATA_WRITE = 'DATA_WRITE',
};

export interface actionDataRequest {
    type: ActionTypeData.DATA_SEND_REQUEST;
};

export interface actionDataSuccess {
    type: ActionTypeData.DATA_SEND_SUCCESS;
    text: string;
};

export interface actionDataFail {
    type: ActionTypeData.DATA_SEND_FAIL;
    text: string;
};

export interface actionDataWrite {
    type: ActionTypeData.DATA_WRITE;
    text: string;
};

export type ActionData = 
    actionDataRequest | actionDataSuccess | actionDataFail | actionDataWrite;