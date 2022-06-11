import { Component, JSX, useContext } from 'solid-js';

import { createBinance } from '../primitives/createBinance';
import { DataContext } from '../context';

import brand from "../assets/brand.png";

import HomeStyle from '../styles/Home.module.scss';

export const Home: Component = (): JSX.Element => {
    
    const { dataState } = useContext(DataContext);
    const { bin, isLoading } = createBinance();

    return (
        <>
            <h3 class="text-center mt-3">Happy Hacking! with Typescript?</h3>
            <p class={`text-center mt-3 ${HomeStyle.roboto}`}>SCSS is working? Yes, with Roboto</p>
            {
                dataState().data
                    ? <p class="text-center mt-3">Store State: Yes, you write <b>{dataState().data || ''}</b></p>
                    : <p class="text-center mt-3">Store State: Not yet.</p>
            }
            <div class="row mt-4">
                <div class="col-sm"></div>
                    <div class="col-sm">
                        <h4 class="text-center mt-3">Made with love by</h4>
                            <div class="d-flex justify-content-center">
                                <img src={brand} alt=""/>
                            </div>
                    </div>
                <div class="col-sm"></div>
            </div>
            <br />
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-3">
                        <h3 class="text-center mt-3">Lets see bitcoin price</h3>
                        <br />
                        {
                            isLoading()
                                ? <p class='text-center'>Loading...</p>  
                                : ( <>
                                        <p class='text-center'>Symbol: {bin()?.symbol}</p>
                                        <p class='text-center'>Price: {bin()?.askPrice}</p>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};