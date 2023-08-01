import { combineReducers } from "redux";
import addListItemReducer from "./addListItemReducer";


const reducers = combineReducers({
    allItems: addListItemReducer
})

export default reducers;