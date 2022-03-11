import { createStore } from "redux";
import { dataReducer } from "./dataDucks";

export default createStore(dataReducer);