import { createSignal, createEffect } from "solid-js";

import { binanceData } from '../api/binance';
import type { TBinance } from '../types/TBinance';

export const useBinance = () => {
    
    const [ bin, setBin ] = createSignal<TBinance>();
    
    const [ isLoading,  setIsLoading ] = createSignal<boolean>(true);
    
    const getCurrencies = async() => {
        const resp = await binanceData.get<TBinance[]>('');
        const BTCUSDT = resp.data.find(curr => curr.symbol === 'BTCUSDT');
        setBin( BTCUSDT );
        setIsLoading(false);
    };
    
    createEffect(() => {
        getCurrencies();
    });
    
    return { bin, isLoading };
};