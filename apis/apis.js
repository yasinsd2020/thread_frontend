import api from "./apisConfig";

// products
export const getAll_SingleProductAPI = (product_info) => api.post('/product',product_info)
export const getListOfNewArivelApi = () => api.post('/product/new_arrival')

// product / carts
export const addToCartAPI = (product_info) => api.post('/order/add_to_cart',product_info)
export const getAllCartProductAPI = (user_id) => api.post('/order/user_cart',user_id)
export const removeFromCartAPI = (product_info) => api.post('/order/remove_from_cart',product_info)

// add to whishlist
export const addToWishListAPI = (product_info) => api.post('/order/add_to_wishlist',product_info) 
export const getWishListAPI = (product_info) => api.post('/order/user_wishlist',product_info) 
export const removeWishListAPI  = (product_info) => api.post('/order/remove_from_wishlist',product_info)

// filter by category
export const getCategoryListApi =()=>api.post('/product/category')

// login an Register
export const registrationApi =()=>api.post('/api/auth/registration',login_requst_info)