import { createSignal, createEffect, onCleanup, useContext } from "solid-js";
import { useNavigate } from "solid-app-router";
import { Subscription } from "rxjs";

import { DataContext, ThemeContext } from "../context";
import { binance$ } from '../api/binance';
import type { TBinance } from '../types';

let subscription = new Subscription();

export const createHome = () => {

    const { dataState } = useContext(DataContext);

    const { darkMode, controlBackground, 
        setDarkBackground, setWhiteBackground, 
        setControlBackground, setTogglePeer } = useContext(ThemeContext);
    
    const [ bin, setBin ] = createSignal<TBinance>();
    const [ isLoading, setIsLoading ] = createSignal<boolean>(true);

    const navigate = useNavigate();
    
    createEffect(() => {
        subscription = binance$.subscribe( data => {
            const BTCUSDT = data.find(curr => curr.symbol === 'BTCUSDT');
            setBin(BTCUSDT);
            setIsLoading(false);
        });
    });

    onCleanup(() => subscription.unsubscribe());

    const blueChange = (): void => { 
        if(darkMode()) {
            setDarkBackground("dark:bg-sky-900");
            setControlBackground('bg-sky-700/30');
            setTogglePeer('peer-checked:bg-sky-500');
        } else {
            setWhiteBackground("bg-sky-300");
            setControlBackground('bg-sky-700/30');
            setTogglePeer('peer-checked:bg-sky-300');
        }
    };

    const purpleChange = (): void => {
        if(darkMode()) {
            setDarkBackground("dark:bg-purple-900");
            setControlBackground('bg-purple-700/30');
            setTogglePeer('peer-checked:bg-purple-500');
        } else {
            setWhiteBackground("bg-purple-300");
            setControlBackground('bg-purple-700/30');
            setTogglePeer('peer-checked:bg-purple-300');
        }
    };

    const redChange = (): void => {
        if(darkMode()) {
            setDarkBackground("dark:bg-red-900");
            setControlBackground('bg-red-700/30');
            setTogglePeer('peer-checked:bg-red-500');
        } else {
            setWhiteBackground("bg-red-300");
            setControlBackground('bg-red-700/30');
            setTogglePeer('peer-checked:bg-red-300');
        }
    };

    const emeraldChange = (): void => {
        if(darkMode()) {
            setDarkBackground("dark:bg-emerald-900");
            setControlBackground('bg-emerald-700/30');
            setTogglePeer('peer-checked:bg-emerald-300');
        } else {
            setWhiteBackground("bg-emerald-300");
            setControlBackground('bg-emerald-700/30');
            setTogglePeer('peer-checked:bg-emerald-500');
        }
    };

    const changeToStore = (): void => navigate('/store');
    
    return { 
        dataState, darkMode, controlBackground, blueChange,
        purpleChange, redChange, emeraldChange, changeToStore,
        bin, isLoading
    };
};