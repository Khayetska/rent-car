import axios from 'axios';

axios.defaults.baseURL = 'https://650179c8736d26322f5bbf63.mockapi.io';

export const getCars = async page => {
  const { data } = await axios.get(`/advert?page=${page}&limit=8`);
  return data;
};

export const getAllCars = async () => {
  const { data } = await axios.get(`/advert`);
  return data;
};
