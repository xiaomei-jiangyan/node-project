// import { createStore } from "redux";
// import reducer from "./reducer.js";

// export store = new createStore(reducer);

import {createStore} from "redux"
import reducer from "./reducer"

const store = new createStore(reducer)

export default store;