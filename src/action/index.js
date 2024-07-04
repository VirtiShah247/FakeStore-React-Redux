export const handleLogin = (userDetails) => {
   return {
    type: "LOGIN",
    payload: userDetails
    }
}

export const handleLogout = () => {
    return {
        type: "LOGOUT"
    }
}

export const addProduct = (responeData) => {
    return {
        type: "ADDPRODUCT",
        payload: responeData
    }
}

export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product
    }
}

export const delCart = (product) => {
    return {
        type: "DELCART",
        payload: product
    }
}
export const increaseQuantity = (product) => {
    return {
        type: "INCREASEQUANTITY",
        payload: product
    }
}
export const decreaseQuantity = (product) => {
    return {
        type: "DECREASEQUANTITY",
        payload: product
    }
}
