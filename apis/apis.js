import api from "./apisConfig";

// products
export const getSingleProductAPI = (variant_productId) => api.post('/product',{variant_id:variant_productId})
export const getListOfProductAPI = () => api.post('/product/new_arrival')


