import axios from 'axios';

axios.defaults.baseURL = 'https://650179c8736d26322f5bbf63.mockapi.io';

export const getCars = async () => {
  const { data } = await axios.get('/advert');
  return data;
};
