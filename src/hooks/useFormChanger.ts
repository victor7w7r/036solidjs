import { createSignal } from "solid-js";
import { useStoreon } from '@storeon/solidjs';

import { Events, State } from '../types';

export const useFormChanger = () => {

    const [text, setText] = createSignal<string>("");
    const [state, dispatch] = useStoreon<State, Events>();

    const handleSubmit = (e: Event): void => {
        e.preventDefault();
        dispatch('success',text());
    }

    const handleChange = (value: string): void => {
        setText(value);
    };

    return { handleSubmit, handleChange, state };

};