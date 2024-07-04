import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { CartReducer } from "./cartReducer";
import { ProReducer } from "./proReducer";
export const initialState = {
    isAuth : false,
    cart: [],
    totalCartProduct: 0,
    prodData: null,
}
export const rootReducers = combineReducers({
    authReducer: AuthReducer,
    cartReducer: CartReducer,
    proReducer: ProReducer,
});