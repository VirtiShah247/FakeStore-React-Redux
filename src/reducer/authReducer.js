import { initialState } from ".";
export const AuthReducer = (state = initialState, action) => {
    const userDetails = action.payload;
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("userDetails", userDetails);
            return { ...state, isAuth : true }
        case "LOGOUT":
            localStorage.clear("userDetails");
            return { ...state, isAuth : false }    
        default:
            break;
    }
    return state;
}