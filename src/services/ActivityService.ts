import { AxiosResponse } from "axios";
import { IActivity } from "../types/IActivity";
import $api from "../http";
import generateAxiosResponse from "../utils/generateAxiosResponse";
import { IActivityFormData } from "../types/IActivityFormData";

export interface IActivitiesListResponse {
  activities: IActivity[]
}

export class ActivityService {
  static async create(formData: IActivityFormData): Promise<AxiosResponse<IActivity>> {
    return await $api.post('activity', formData);
  }
}