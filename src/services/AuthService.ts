import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import $api from "../http";
import { IRegistrationFormData } from "../layers/modules/registartion_form/components/RegistrationForm";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post<AuthResponse>('/login', {email, password});
  }

  static async registration(formData: IRegistrationFormData): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post<AuthResponse>('auth/register', {email: formData.email, password: formData.password});
  }

  static async logout(): Promise<AxiosResponse<void>> {
    return await $api.post('/logout');
  }
}