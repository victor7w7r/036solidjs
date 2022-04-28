import { createSignal, createEffect } from "solid-js";

import { binance$ } from '../api/binance';
import type { TBinance } from '../types';

export const useBinance = () => {
    
    const [ bin, setBin ] = createSignal<TBinance>();
    const [ isLoading, setIsLoading ] = createSignal<boolean>(true);
    
    createEffect(() => {
        binance$.subscribe( data => {
            const BTCUSDT = data.find(curr => curr.symbol === 'BTCUSDT');
            setBin(BTCUSDT);
            setIsLoading(false);
        });
    });
    
    return { bin, isLoading };
};