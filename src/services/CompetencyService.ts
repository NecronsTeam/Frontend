import { Axios, AxiosResponse } from "axios";
import $api from "../http";
import { ICompetencyCreateForm } from "../types/ICompetencyCreateForm";
import { Competency, ICompetency } from "../types/ICompetency";
import { IGetAllCompetenciesResponse } from "../responses/GetAllCompetenciesResponse";
import { ICreateCompetencyFormData } from "../types/ICreateCompetencyFormData";


export class CompetencyService {
  static async create(formData: ICreateCompetencyFormData): Promise<AxiosResponse<ICompetency>> {
    return await $api.post('competence', formData);
  }

  static async getAll(searchQuery: string = ''): Promise<AxiosResponse<IGetAllCompetenciesResponse>> {
    return await $api.get<IGetAllCompetenciesResponse>('competence', {
      params: {
        searchText: searchQuery
      }
    });
  }
}