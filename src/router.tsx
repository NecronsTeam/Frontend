import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import IndexPage from "./layers/pages/index_page/IndexPage";
import RegistrationPage from "./layers/pages/registration_page/components/page/RegistrationPage";

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
      element: <RegistrationPage/>
    }
  ]
}]);

export default router;