import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthProvider from "../AuthProvider/AuthProvider";
import ResidentialSolar from "../Pages/ResidentialSolar/ResidentialSolar";
import RsHome from "../Components/RsHome/RsHome";
const router = createBrowserRouter([
  {
    path: "/",
    element:<AuthProvider> <App /> </AuthProvider>,
    children: [
      {
        path: "/",
        element: (
          
            <Home />
          
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/residentialSolar", element: <AuthProvider> <ResidentialSolar /> </AuthProvider>,
    children:[
      { path: "/residentialSolar", element:<AuthProvider><RsHome/></AuthProvider>}
    ]
  }
]);
export default router;
