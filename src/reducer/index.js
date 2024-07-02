import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { CartReducer } from "./cartReducer";
import { ProReducer } from "./proReducer";
export const initialState = {
    isAuth : false,
    cart: [],
    prodData: [],
    loading: false
}
export const rootReducers = combineReducers({
    authReducer: AuthReducer,
    cartReducer: CartReducer,
    proReducer: ProReducer
});