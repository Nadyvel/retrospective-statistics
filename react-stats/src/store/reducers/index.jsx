import { combineReducers } from "redux";
import statsData from "./statsReducer";

//this file is responsible for passing my data into the redux store.
const rootReducer = combineReducers({
    statsData,
});


export default rootReducer
