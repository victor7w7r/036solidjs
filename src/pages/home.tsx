import type { Component, JSX } from 'solid-js';
import { useStoreon } from '@storeon/solidjs';

import { Events, State } from '../types';

import brand from "../assets/brand.png";

import HomeStyle from '../styles/Home.module.scss';

export const Home: Component = (): JSX.Element => {
    
    const [state] = useStoreon<State, Events>();

    return (
        <>
            <h3 className="text-center mt-3">Happy Hacking! with Typescript?</h3>
            <p className={`text-center mt-3 ${HomeStyle.roboto}`}>SCSS is working? Yes, with Roboto</p>
            {
                state.data !== '' ? (
                    <p className="text-center mt-3">Store State: Yes, you write <b>{state.data || ''}</b></p>
                ) : (
                    <p className="text-center mt-3">Store State: Not yet.</p>
                ) 
            }
            <div className="row mt-4">
                <div className="col-sm"></div>
                    <div className="col-sm">
                        <h4 className="text-center mt-3">Made with love by</h4>
                            <div className="d-flex justify-content-center">
                                <img src={brand} alt=""/>
                            </div>
                    </div>
                <div className="col-sm"></div>
            </div>
        </>
    );
};