import { onCleanup } from "solid-js";
import { createStore } from "solid-js/store";
import { Store } from "redux";

import { Actions } from "../types";

export const useRedux = (store: Store, actions?: Actions) => {

    const [state, setState] = createStore(store.getState());
    const unsubscribe = store.subscribe(() => setState(store.getState()));

    onCleanup(() => unsubscribe());

    return [state, mapActions(store, actions!)];
};

export const mapActions = (store: Store, actions: any) => {

    const mapped: any = {};
    for (const key in actions) {
        mapped[key] = (...args: string[]) => store.dispatch(actions[key](...args))
    }

    return mapped;
}