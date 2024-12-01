import { RouterProvider } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import router from "./router"


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
