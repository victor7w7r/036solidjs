import type { Component, JSX } from "solid-js";

const inputDesign: string = `block py-2.5 px-0 w-full text-sm text-gray-900 
    bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
    dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
    focus:ring-0 focus:border-blue-600 peer`;

const floatingLabelDesign: string = `peer-focus:font-medium absolute text-sm text-gray-500 
    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
    peer-focus:scale-75 peer-focus:-translate-y-6`;

import { createStore } from "../primitives/createStore";

export const StorePage: Component = (): JSX.Element => {

    const { 
        handleSubmit, handleChange, changeToHome,
        text, dataState, controlBackground 
    } = createStore();
    
    return (
        <div class="absolute h-screen inset-0 backdrop-blur-xl">
            <div class='flex items-center mt-32 lg:items-stretch lg:justify-evenly lg:h-3/6'>
                <div class={`card-container ${controlBackground()}`}>
                    <h3 class="adaptable-center-text text-base lg:text-xl font-semibold mb-4">Write anything in this form and send!</h3>
                    <div class="relative z-0 w-64 mx-auto mt-6">
                        <input type="text" value={text()} name="text" class={inputDesign} 
                            placeholder=" " onChange={e => handleChange(e.currentTarget.value)} />
                        <label for="floating" class={floatingLabelDesign}>here</label>
                    </div>
                    <div class='flex items-center justify-center my-8 tall:my-12'>
                        <button class="standard-button" onClick={handleSubmit}>Send</button>
                    </div>
                    {
                        dataState().data
                            ? <p class="adaptable-center-text text-base lg:text-xl font-semibold">Store State: Yes, you write <b>{dataState().data || ''}</b></p>
                            : <p class="adaptable-center-text text-base lg:text-xl font-semibold">Store State: Not yet.</p>
                    }
                </div>
            </div>
            <div class='flex items-center justify-center my-8 tall:my-12'>
                <button class="standard-button" onClick={changeToHome}>Go to Home</button>
            </div>
        </div>
    );
};
