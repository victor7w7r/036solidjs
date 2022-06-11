import type { Component, JSX } from "solid-js";

import { createFormChanger } from "../primitives/createFormChanger";

export const StoreEx: Component = (): JSX.Element => {

    const { handleSubmit, handleChange, dataState } = createFormChanger();
    
    return (
        <>
            <h3 class="text-center mt-3">Store Example</h3>
            <p class="text-center mt-3">Write anything in this form and send!</p>
            <form onSubmit={handleSubmit}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm"></div>
                        <div class="col-sm">
                                <input type="text" class="form-control mb-4" onChange={({currentTarget}) => handleChange(currentTarget.value)} required placeholder="here" />
                                <div class="d-flex justify-content-center">
                                    <button type="submit" class="btn btn-primary text-center">Submit</button>
                                </div>
                                {
                                    dataState().data
                                        ? <p class="text-center mt-3">Store State: Yes, you write <b>{dataState().data || ''}</b></p>
                                        : <p class="text-center mt-3">Store State: Not yet.</p>
                                }
                        </div>
                        <div class="col-sm"></div>
                    </div>
                </div>
            </form>
        </>
    );
};