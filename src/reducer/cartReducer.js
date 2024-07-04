import { initialState } from ".";
export const CartReducer = (state = initialState, action) => {
    const product = action.payload;
    console.log("product is ", product);
    switch (action.type) {
        case "ADDCART":
            return {
                ...state,
                cart: [...state.cart, { ...product, qty: 1 }],
                totalCartProduct: state.totalCartProduct + 1
            }

        case "DELCART":
            console.log("DELETE CART ------ ", state.cart.find((pro) => pro.id === product.id))
                return {
                    ...state,
                    cart: state.cart.filter((pro) => pro.id !== product.id),
                    totalCartProduct: state.totalCartProduct - state.cart.find((pro) => pro.id === product.id).qty,
                }
        case "INCREASEQUANTITY":
            const addExist = state.cart.filter((pro) => pro.id === product.id);
            console.log("add exist is ", addExist?.length)
            if (addExist?.length !== 0) {
                return {
                    ...state,
                    cart: state.cart.map((pro) => pro.id === product.id ? { ...pro, qty: pro.qty + 1 } : { ...pro }),
                    totalCartProduct: state.totalCartProduct + 1
                };
            }
            else{   
                return state;
            }
        case "DECREASEQUANTITY":
            const delExist = state.cart.find((pro) => pro.id === product.id);
            console.log("delExist: " + delExist.qty);
            if(delExist.qty !== 1){
                return {
                    ...state,
                    cart: state.cart.map((pro) =>
                        pro.id === product.id ? { ...pro, qty: pro.qty - 1 } : pro
                    ),
                    totalCartProduct: state.totalCartProduct - 1,
                }
            }
            else{
                return state;
            }
        default:
            return state;
    }
}