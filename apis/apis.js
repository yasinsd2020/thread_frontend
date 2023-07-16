import api from "./apisConfig";

// products
export const getSingleProductAPI = (productId) => api.get('/product',{id:productId})
export const getListOfProductAPI = () => api.get('/product')


