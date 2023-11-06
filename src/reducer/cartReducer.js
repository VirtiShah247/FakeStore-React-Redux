import { initialState } from ".";
export const CartReducer = (state = initialState, action) => {
    const product = action.payload;
    console.log("product is ", product);
    switch (action.type) {
        case "ADDCART":
            
            const addExist = state.cart.filter((pro) => pro.id === product.id);
            console.log("add exist is ", addExist)
            if(addExist === Array[0]){
                console.log("state.cart[0] is ", state.cart[0])
                return state.cart.map((pro) => 
                    pro.id === product.id ? {...pro, qty: pro.qty + 1} : pro
                )
            }
            else{
                console.log("else part")
                return {
                    ...state,
                    cart: [...state.cart, { ...product, qty: 1}]
                }
            }
        
        case "DELCART":
            const delExist = state.cart.filter((pro) => pro.id === product.id);
            if(delExist === 1){
                return state.cart.filter((pro)=> pro.id !== product.id)
            }
            else{
                return state.cart.map((pro) => 
                    pro.id === product.id ? {...pro, qty: pro.qty - 1} : pro
                )
            }
        default:
            return state;
    }
    console.log("state is ", state);
}