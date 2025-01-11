import { ActivityService } from "../../../../services/ActivityService";

export async function activitiesListLoader() {
  const response = await ActivityService.getAll({owned: true});
  return response.data.activities;
}