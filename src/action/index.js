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

export const setProduct = (type,product) => {
    return {
        type: type,
        payload: product
    }
}

export const setLoading = (type,value) => {
    return {
        type: type,
        payload: value
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
