import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../../../store/store";
import ProfileService from "../../../../services/ProfileService";


export async function profileEditLoader(args: LoaderFunctionArgs, store: Store) {
  const clientUserId = args.params.userId;
  if (clientUserId != store.user.id) {
    return redirect('/');
  }

  const response = await ProfileService.getByUserId(store.user.id);
  return response.data;
}