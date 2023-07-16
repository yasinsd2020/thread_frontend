import api from "./apisConfig";

// products
export const getSingleProductAPI = (productId) => api.post('/product',{id:productId})
export const getListOfProductAPI = () => api.post('/product')


