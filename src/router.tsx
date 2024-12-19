import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import IndexPage from "./layers/pages/index_page/IndexPage";
import RegistrationPage from "./layers/pages/registration_page/components/page/RegistrationPage";
import { RegistartionFormAction } from "./layers/modules/registartion_form/actions/RegistrationFormAction";
import LoginPage from "./layers/pages/login_page/components/LoginPage";
import ProfileViewPage from "./layers/pages/profile_view_page/components/page/ProfileViewPage";

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  children: [
    {
      index: true,
      element: <IndexPage/>
    },
    {
      path: 'registration',
      element: <RegistrationPage/>,
    },
    {
      path: 'login',
      element: <LoginPage/>
    }, 
    {
      path: 'profile_view',
      element: <ProfileViewPage/>
    },
    {
      path: 'activities',
      element: <ProfileViewPage/>
    }
  ]
}]);

export default router;