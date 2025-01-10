import { Axios, AxiosResponse } from "axios";
import $api from "../http";
import { ICompetencyCreateForm } from "../types/ICompetencyCreateForm";
import { Competency, ICompetency } from "../types/ICompetency";
import { IGetAllCompetenciesResponse } from "../responses/GetAllCompetenciesResponse";


export class CompetencyService {
  static async create(formData: ICompetencyCreateForm): Promise<AxiosResponse<ICompetency>> {
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