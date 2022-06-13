import { createContext, Component, createSignal, onMount, JSX } from 'solid-js';

import type { TThemeContext } from "../types/TThemeContext";
import { Header } from '../components/Header';

export const ThemeContext = createContext<TThemeContext>( {} as TThemeContext );

export const ThemeProvider: Component<{children: JSX.Element}> = (props): JSX.Element => {
    
    const [darkMode, setDarkMode] = createSignal<boolean>(false);
    const [whiteBackground, setWhiteBackground] = createSignal<string>('bg-white');
    const [darkBackground, setDarkBackground] = createSignal<string>('dark:bg-zinc-900');
    const [controlBackground, setControlBackground] = createSignal<string>('bg-slate-700/30');
    const [togglePeer, setTogglePeer] = createSignal<string>('');

    onMount(()=> {
        const isDark: boolean = document.body.classList.contains("dark");
        isDark ? setDarkMode(true) : setDarkMode(false); 
    });

    const valuables: TThemeContext = {
        darkMode, setDarkMode, whiteBackground,
        darkBackground, setWhiteBackground, 
        setDarkBackground, controlBackground, setControlBackground,
        setTogglePeer, togglePeer
    };

    return (
        <ThemeContext.Provider value={valuables}>
            <div class={`h-screen transition-colors duration-1000 ${whiteBackground()} ${darkBackground()}`}>
                {props.children}
                <Header />
            </div>
        </ThemeContext.Provider>
    );
};