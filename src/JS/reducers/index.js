import { combineReducers } from "redux";

import taskReducer from "./listReducer";

const rootReducer = combineReducers({task:taskReducer})

export default rootReducer