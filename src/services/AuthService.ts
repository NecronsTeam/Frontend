import { AxiosResponse } from "axios";
import $api from "../http";
import { IRegistrationFormData } from "../layers/modules/registartion_form/components/RegistrationForm";
import { ILoginFormData } from "../layers/modules/login_form/components/LoginForm";

export default class AuthService {
  static async login(formData: ILoginFormData): Promise<AxiosResponse<string>> {
    return await $api.post<string>('auth/login', formData);
  }

  static async registration(formData: IRegistrationFormData): Promise<AxiosResponse> {
    return await $api.post<string>('auth/register', formData);
  }

  static async logout(): Promise<AxiosResponse<void>> {
    return await $api.post('/logout');
  }
}