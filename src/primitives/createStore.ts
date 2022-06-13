import { createSignal, useContext } from "solid-js";
import { useNavigate } from "solid-app-router";

import { DataContext, ThemeContext } from '../context';

export const createStore = () => {

    const navigate = useNavigate();

    const { controlBackground } = useContext(ThemeContext);

    const [text, setText] = createSignal<string>("");
    const {dataState, success} = useContext(DataContext);

    const handleSubmit = (): void => success(text());

    const handleChange = (value: string): void => {
        setText(value);
    };

    const changeToHome = (): void => navigate('/');

    return { 
        handleSubmit, handleChange, changeToHome,
        text, dataState, controlBackground 
    };

};