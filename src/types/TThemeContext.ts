import type { Accessor, Setter } from "solid-js";

export type TThemeContext = { 
    darkMode: Accessor<boolean>,
    setDarkMode: Setter<boolean>,
    whiteBackground: Accessor<string>,
    darkBackground: Accessor<string>,
    setWhiteBackground: Setter<string>,
    setDarkBackground: Setter<string>,
    controlBackground: Accessor<string>,
    setControlBackground: Setter<string>,
    setTogglePeer: Setter<string>,
    togglePeer: Accessor<string>
};