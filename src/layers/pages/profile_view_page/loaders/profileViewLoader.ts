import { Axios } from "axios";
import { LoaderFunctionArgs } from "react-router-dom";
import { IProfile } from "../../../../types/Profile";
import ProfileService from "../../../../services/ProfileService";

export async function profileViewLoader({ params }: LoaderFunctionArgs) {
  const userId = params.userId ?? '1';
  const response = await ProfileService.getByUserId(userId);

  return response.data;
}