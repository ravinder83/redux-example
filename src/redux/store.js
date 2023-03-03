import {createStore} from "redux";
import reducers from "./reducers";

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// create store takes 3 arguments --- 1- reducers , 2- middleware like (redux thunk) , 3- redux dev-tools extension