import { Component, createContext, JSX } from "solid-js";
import { createReducer } from "@solid-primitives/reducer";

import type { DataContextProps, DataState } from "../types";
import { DataReducer } from './dataReducer';

export const dataInitialState: DataState = {
    data: undefined,
    loading: false,
    success: false
};

export const DataContext = createContext<DataContextProps>( {} as DataContextProps );

export const DataProvider: Component<{children: JSX.Element}> = (props): JSX.Element => {
    
    const [dataState, dispatch] = createReducer(DataReducer, dataInitialState);

    const success = (data: string) => {
        dispatch({ type: 'DATA_SEND_SUCCESS', payload: data });
    };

    return (
        <DataContext.Provider value = {{ dataState, success }}>
            {props.children}
        </DataContext.Provider>
    );
};