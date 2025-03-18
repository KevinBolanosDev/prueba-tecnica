import axios from "./axios";

export const getProductsRequest = () => axios.get(`/api/products`);

export const getUsersRequest = () => axios.get(`/api/users`);

export const getSpecialPricesRequest = () => axios.get(`/api/special-prices`);

export const createProductRequest = (product) => axios.post(`/api/product`, product);

export const createSpecialPriceRequest = (specialPrice) => axios.post(`/api/special-price`, specialPrice);

export const updateSpecialPriceRequest = (specialPrice) => 
  axios.put(`/api/special-price/:id`, specialPrice);
