export enum ActionTypeData {
    DATA_SEND_REQUEST = 'DATA_SEND_REQUEST',
    DATA_SEND_SUCCESS = 'DATA_SEND_SUCCESS',
    DATA_SEND_FAIL = 'DATA_SEND_FAIL',
    DATA_WRITE = 'DATA_WRITE',
};

export type DataState = {
    data?: string,
    loading?: boolean;
    success?: boolean;
};

export type actionDataRequest = {
    type: ActionTypeData.DATA_SEND_REQUEST;
};

export type actionDataSuccess = {
    type: ActionTypeData.DATA_SEND_SUCCESS;
    text: string;
};

export type actionDataFail = {
    type: ActionTypeData.DATA_SEND_FAIL;
    text: string;
};

export type actionDataWrite = {
    type: ActionTypeData.DATA_WRITE;
    text: string;
};

export type Actions = {
    send?: (text: string) => actionDataWrite
};

export type ActionData = 
    actionDataRequest | actionDataSuccess | actionDataFail | actionDataWrite;