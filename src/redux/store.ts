import { createStore } from "redux";
import { dataReducer } from "./dataDucks";

export const storeCreated = createStore(dataReducer);