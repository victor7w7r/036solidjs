export type State = {
    data: string,
    loading?: boolean,
    success?: boolean
};

export type Events = {
    'request': undefined,
    'success': string,
    'error': undefined
};