import axios from 'axios';
import Cookies from 'js-cookie';
const ENDPOINT = 'http://3.108.14.110/api/v1/';

export const cookie = (type, value = null) => {
  if (value) return Cookies.set(type, value);
  return Cookies.get(type);
};

export const deleteSession = () => {
  ['session_token', 'email'].map((x) => Cookies.remove(x));
};

export const landingFormAction = (payload) => {
  const type = 'name' in payload ? 'signup' : 'login';
  return axios.post(ENDPOINT + `user/${type}`, payload);
};

export const getMovies = (slug = '') => {
  return axios.get(ENDPOINT + 'movie/list/' + slug);
};

export const addMovie = (payload) => {
  return axios.post(ENDPOINT + 'movie/add', payload);
};
export const addComment = (payload) => {
  return axios.post(ENDPOINT + 'movie/add/comment', payload, {
    headers: {
      'x-access-token': cookie('session_token')
    }
  });
};
