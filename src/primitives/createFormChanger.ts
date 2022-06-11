import { createSignal, useContext } from "solid-js";

import { DataContext } from '../context';

export const createFormChanger = () => {

    const [text, setText] = createSignal<string>("");
    const {dataState, success} = useContext(DataContext);

    const handleSubmit = (e: Event): void => {
        e.preventDefault();
        success(text());
    }

    const handleChange = (value: string): void => {
        setText(value);
    };

    return { handleSubmit, handleChange, dataState };

};