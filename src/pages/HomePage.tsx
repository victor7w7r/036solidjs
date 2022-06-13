import { Component, JSX } from 'solid-js';

import { Spinner } from '../components/Spinner';

import { createHome } from '../primitives/createHome';

import brand from '../assets/brand.png';
import brandwhite from '../assets/brandwhite.png';
import tailwind from '../assets/tailwind.png';
import tailwindWhite from '../assets/tailwindwhite.png';

export const HomePage: Component = (): JSX.Element => {

    const { dataState, darkMode, controlBackground, blueChange,
        purpleChange, redChange, emeraldChange, changeToStore,
        bin, isLoading } = createHome();

    return (
        <div class="absolute h-screen inset-0 backdrop-blur-xl">
            <div class='flex flex-col lg:flex-row items-center mt-24 tall:mt-32 lg:items-stretch lg:justify-evenly lg:h-3/6'>
                <div class={`card-container ${controlBackground()}`}>
                    <p class="adaptable-center-text text-lg tall:text-xl lg:text-3xl font-amina">Made with love by</p>
                    <img src={darkMode() ? brandwhite : brand} alt="" class="scale-75 lg:scale-100" />
                    <h3 class="adaptable-center-text text-base lg:text-xl font-semibold mb-4">Happy Hacking! with Typescript?</h3>
                    <p class="adaptable-center-text text-base lg:text-xl font-roboto mb-8">Roboto Font works with</p>
                    <img src={darkMode() ? tailwindWhite : tailwind} alt="" class="scale-50 tall:scale-75 lg:scale-75" />
                </div>
                <div class={`card-container ${controlBackground()}`}>
                    {
                        dataState().data
                            ? <p class="adaptable-center-text text-base lg:text-xl font-semibold">Store State: Yes, you write <b>{dataState().data || ''}</b></p>
                            : <p class="adaptable-center-text text-base lg:text-xl font-semibold">Store State: Not yet.</p>
                    }
                    <div class='lg:w-[28rem] w-[32rem]'></div>
                    <h3 class="adaptable-center-text text-lg lg:text-3xl font-semibold my-4">Lets see bitcoin price</h3>
                    {
                        isLoading()
                            ? <Spinner appendClass='data' />
                            : ( <>
                                    <p class='adaptable-center-text text-base lg:text-lg font-semibold'>Symbol: {bin()?.symbol}</p>
                                    <p class='adaptable-center-text text-base lg:text-lg font-semibold'>Price: {bin()?.askPrice}</p>
                                </>
                            )
                    }
                </div>
            </div>
            <div class='flex items-center justify-center my-8 tall:my-12'>
                <button class="standard-button" onClick={changeToStore}>Go to store</button>
            </div>
            <div class='flex flex-row items-center justify-center'>
                <button class="blue-button" onClick={blueChange}></button>
                <button class="purple-button" onClick={purpleChange}></button>
                <button class="red-button" onClick={redChange}></button>
                <button class="emerald-button" onClick={emeraldChange}></button>
            </div>
        </div> 
    );
};