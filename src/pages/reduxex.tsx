import { createSignal, createEffect } from "solid-js";
import type { Component, JSX } from 'solid-js';

import { storeCreated, actions, useRedux } from "../redux";

export const ReduxEx: Component = (): JSX.Element => {

    const [text, setText] = createSignal<string>("");
    const [store, { send }] = useRedux(storeCreated, actions);

    const handleSubmit = (e: Event): void => {
        e.preventDefault();
        send(text());
    }

    createEffect(() => text());
    return (
        <>
            <h3 className="text-center mt-3">Redux Example</h3>
            <p className="text-center mt-3">Write anything in this form and send!</p>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                                <input type="text" className="form-control mb-4" onChange={(e) => setText(e.currentTarget.value)} required placeholder="here" />
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                                </div>
                                {
                                    store.data !== '' ? (
                                        <p className="text-center mt-3">Redux State: Yes, you write <b>{store.data || ''}</b></p>
                                    ) : (
                                        <p className="text-center mt-3">Redux State: Not yet.</p>
                                    ) 
                                }
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </form>
        </>
    );
};