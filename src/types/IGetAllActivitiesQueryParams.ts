import { ActivityStatus } from "./ActivityStatus";
import { ICompetency } from "./ICompetency";

export interface IGetAllActivitiesQueryParams {
  competencies?: ICompetency[],
  name?: string,
  apllied?: boolean,
  status?: ActivityStatus[],
  owned?: boolean
}