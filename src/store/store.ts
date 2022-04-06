import { createStoreon, StoreonModule } from 'storeon';

import { State, Events } from '../types';

const dataStore: StoreonModule<State, Events> = store => {
    store.on('@init', () => ({data: undefined}));
    store.on('request', () => ({loading: true}));
    store.on('success', (state, event) => ({data: event, loading: false}));
    store.on('error', (state, event) => ({data: event, loading: false}));
};

export const store = createStoreon([dataStore]);