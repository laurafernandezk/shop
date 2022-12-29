 import {createStore, combineReducers, applyMiddleware} from "redux";
 import thunk from "redux-thunk";
 import {categoryReducer, productsReducer, cartReducer, orderReducer, authReducer, catalogReducer} from "./reducers";

 const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
    catalog: catalogReducer,
 })

 export default createStore(rootReducer, applyMiddleware(thunk));
