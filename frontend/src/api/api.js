import axios from "./axios";

export const getProductsRequest = () => axios.get(`/products`);

export const getUsersRequest = () => axios.get(`/users`);

export const getSpecialPricesRequest = () => axios.get(`/special-prices`);

export const createProductRequest = (product) => axios.post(`/product`, product);

export const createSpecialPriceRequest = (specialPrice) => axios.post(`/special-price`, specialPrice);

export const updateSpecialPriceRequest = (specialPrice) => 
  axios.put(`/special-price/:id`, specialPrice);
