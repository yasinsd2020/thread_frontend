import api from "./apisConfig";

// products
export const getSingleProductAPI = (variant_productId) => api.post('/product',{variant_id:variant_productId})
export const getListOfProductAPI = () => api.post('/product/new_arrival')

// product / carts
export const addToCartAPI = (product_info) => api.post('/order/add_to_cart',product_info)
export const getAllCartProductAPI = (user_id) => api.post('/order/user_cart',user_id)
export const removeFromCartAPI = (product_info) => api.post('/order/remove_from_cart',product_info)

