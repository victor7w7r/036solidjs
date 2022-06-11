import { createSignal, createEffect, onCleanup } from "solid-js";
import { Subscription } from "rxjs";

import { binance$ } from '../api/binance';
import type { TBinance } from '../types';

let subscription = new Subscription();

export const createBinance = () => {
    
    const [ bin, setBin ] = createSignal<TBinance>();
    const [ isLoading, setIsLoading ] = createSignal<boolean>(true);
    
    createEffect(() => {
        subscription = binance$.subscribe( data => {
            const BTCUSDT = data.find(curr => curr.symbol === 'BTCUSDT');
            setBin(BTCUSDT);
            setIsLoading(false);
        });
    });

    onCleanup(() => subscription.unsubscribe());
    
    return { bin, isLoading };
};