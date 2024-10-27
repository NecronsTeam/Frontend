import axios, { AxiosRequestConfig } from "axios";

// Изменить на адрес, который на бекенде
export const API_URL = 'https://localhost:7299/';

const $api = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    withCredentials: true,
    mode: 'no-cors',
  }
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

export default $api;