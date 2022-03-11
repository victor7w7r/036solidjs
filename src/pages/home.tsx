// @ts-nocheck

import type { Component, JSX } from 'solid-js';

import reduxStore from "../redux/store";
import useRedux from "../redux/useRedux";
import { actions } from "../redux/dataDucks";

import brand from "../assets/brand.png";

export const Home: Component = (): JSX.Element => {
    
    const [store, {send}] = useRedux(reduxStore, actions);

    return (
        <>
            <h3 className="text-center mt-3">Happy Hacking! with Typescript?</h3>
            <p className="text-center mt-3 roboto">SCSS is working? Yes, with Roboto</p>
            {
                store.data !== '' ? (
                    <p className="text-center mt-3">Redux State: Yes, you write <b>{store.data || ''}</b></p>
                ) : (
                    <p className="text-center mt-3">Redux State: Not yet.</p>
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