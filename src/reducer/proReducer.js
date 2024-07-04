import {initialState} from './index';
export const ProReducer = (state = initialState, action) =>{
    const product = action.payload;
    switch (action.type){
        case "ADDPRODUCT":
            console.log("INSIDE ADD PRODUCT", product);
            console.log("state: " + state);
            return {...state, prodData: product }
        default:
            return state
    }
}