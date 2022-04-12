import type { Component, JSX } from "solid-js";

import { useFormChanger } from "../hooks/useFormChanger";

export const StoreEx: Component = (): JSX.Element => {

    const { handleSubmit, handleChange, state } = useFormChanger();
    
    return (
        <>
            <h3 className="text-center mt-3">Store Example</h3>
            <p className="text-center mt-3">Write anything in this form and send!</p>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                                <input type="text" className="form-control mb-4" onChange={({currentTarget}) => handleChange(currentTarget.value)} required placeholder="here" />
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                                </div>
                                {
                                    state.data
                                        ? <p className="text-center mt-3">Store State: Yes, you write <b>{state.data || ''}</b></p>
                                        : <p className="text-center mt-3">Store State: Not yet.</p>
                                }
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </form>
        </>
    );
};