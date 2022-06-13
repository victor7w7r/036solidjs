import { Component, JSX, useContext } from 'solid-js';
import { ThemeContext } from '../context/ThemeContext';

export const DarkModeToggler: Component = (): JSX.Element => {

    const { darkMode, setDarkMode, setWhiteBackground,
        setDarkBackground, setControlBackground, 
        togglePeer, setTogglePeer } = useContext(ThemeContext);

    const toggled = (): void => {

        if(darkMode()) {
            setDarkMode(false);
            setDarkBackground('bg-white');
            setControlBackground('bg-slate-700/30');
            setTogglePeer('peer-checked:bg-white');
            document.body.classList.toggle("dark");
        } else {
            setDarkMode(true);
            setWhiteBackground('dark:bg-zinc-900');
            setControlBackground('bg-slate-700/30');
            setTogglePeer('peer-checked:bg-dark');
            document.body.classList.toggle("dark");
        }
    };

    const toggleDesign: string = `${togglePeer()} w-11 
    h-6 bg-gray-200 rounded-full peer transition-colors duration-1000 
    peer-focus:ring-0 peer-focus:ring-blue-300 
    dark:peer-focus:ring-blue-800 dark:bg-gray-700 
    peer-checked:after:translate-x-full 
    peer-checked:after:border-white after:content-[''] 
    after:absolute after:top-0.5 after:left-[2px] 
    after:bg-white after:border-gray-300 after:border 
    after:rounded-full after:h-5 after:w-5 after:transition-all 
    dark:border-gray-600`;

    return (
        <div class="relative">
            <div class="flex items-center justify-center w-full">
                <label for="checked-toggle" class="inline-flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" 
                        checked={darkMode()} onChange={toggled}/>
                    <div class={toggleDesign}></div>
                    <span class="ml-3 text-sm font-medium adaptable-text select-none">Dark Mode</span>
                </label>
            </div>
        </div>
    );
};