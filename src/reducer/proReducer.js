import {initialState} from './index';
export const ProReducer = (state = initialState, action) =>{
    const product = action.payload;
    switch (action.type){
        case "ADDPRODUCT":
            return {...state, prodData: product }
        default:
            return state
    }
}