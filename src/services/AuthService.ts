import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import $api from "../http";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post<AuthResponse>('/login', {email, password});
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post<AuthResponse>('/registartion', {email, password});
  }

  static async logout(): Promise<AxiosResponse<void>> {
    return await $api.post('/logout');
  }
}