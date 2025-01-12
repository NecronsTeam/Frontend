import { AxiosResponse } from "axios";
import { IActivity } from "../types/IActivity";
import $api from "../http";
import generateAxiosResponse from "../utils/generateAxiosResponse";
import { IActivityFormData } from "../types/IActivityFormData";
import { IGetAllActivitiesResponse } from "../types/IGetAllActivitiesResponse";
import { ICompetency } from "../types/ICompetency";
import { ActivityStatus } from "../types/ActivityStatus";
import { IGetAllActivitiesQueryParams } from "../types/IGetAllActivitiesQueryParams";

export interface IActivitiesListResponse {
  activities: IActivity[]
}

export class ActivityService {
  static async create(formData: IActivityFormData): Promise<AxiosResponse<IActivity>> {
    return await $api.post('activity', formData);
  }

  static async getAll(params: IGetAllActivitiesQueryParams):Promise<AxiosResponse<IGetAllActivitiesResponse>> {
    return await $api.get('activity', {
      params: params
    })
  }

  static async getById(id: number): Promise<AxiosResponse<IActivity>> {
    return await $api.get(`activity/${id}`);
  }
}