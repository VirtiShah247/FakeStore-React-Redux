import { initialState } from ".";
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isAuth : true }
        case "LOGOUT":
            return { ...state, isAuth : false }    
        default:
            break;
    }
    return state;
}