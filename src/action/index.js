export const handleLogin = () => {
   return {
    type: "LOGIN"
    }
}

export const handleLogout = () => {
    return {
        type: "LOGOUT"
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