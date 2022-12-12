 import {createStore, combineReducers, applyMiddleware} from "redux";
 import thunk from "redux-thunk";
 import {categoryReducer, productsReducer} from "./reducers";

 const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer
 })

 export default createStore(rootReducer, applyMiddleware(thunk));
