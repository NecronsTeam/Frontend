import { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export default function generateAxiosResponse<T>(data: T) {
  const response: AxiosResponse<T> = {
    data,
    status: 200,
    statusText: 'Запрос выполнен успешно',
    headers: {},
    config: {}  as InternalAxiosRequestConfig
  };

  return response;
}