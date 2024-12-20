import { Axios, AxiosResponse } from "axios";
import { IProfile } from "../types/Profile";
import $api from "../http";
import generateAxiosResponse from "../utils/generateAxiosResponse";
import { IProfileForUpdate } from "../types/IProfileForUpdate";

export default class ProfileService {
  static async getByUserId(id: string): Promise<AxiosResponse<IProfile>> {
    const response = generateAxiosResponse({
      id: 1,
      firstName: 'Дмитрий',
      middleName: 'Попов',
      lastName: 'Александрович',
      phoneNumber: '+7996132114',
      email: 'wasd@mail.ru',
      telegramLink: '@cursed12'
    } as IProfile);

    return response;
  }

  static async updateMy(profile: IProfileForUpdate): Promise<AxiosResponse> {
    const response = generateAxiosResponse<{}>({});

    return response;
  }
}