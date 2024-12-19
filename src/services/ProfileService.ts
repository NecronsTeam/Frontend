import { Axios, AxiosResponse } from "axios";
import { IProfile } from "../types/Profile";
import $api from "../http";

export default class ProfileService {
  static async getMy():Promise<AxiosResponse<IProfile>> {
    return await $api.get('');
  }

  static async get(id: number): Promise<AxiosResponse<IProfile>> {
    return await $api.get('');
  }

  static async updateMy(profile: IProfile): Promise<AxiosResponse> {
    return await $api.put('', profile);
  }
}