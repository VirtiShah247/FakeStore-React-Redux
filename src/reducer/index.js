import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { CartReducer } from "./cartReducer";
export const initialState = {
    isAuth : false,
    cart: []
}
export const rootReducers = combineReducers({
    authReducer: AuthReducer,
    cartReducer: CartReducer
});