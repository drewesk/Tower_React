import axios from 'axios';

const API_URL = 'https://lotrtowerbar.herokuapp.com/';

export function getItems() {
  return axios.get(API_URL);
}
