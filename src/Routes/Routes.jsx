
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthProvider from "../AuthProvider/AuthProvider";
import ResidentialSolar from "../Pages/ResidentialSolar/ResidentialSolar";
import RsHome from "../Components/RsHome/RsHome";
import DynamicProjects from "../Components/RsProjects/DynamicProjects";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children: [
      {
        path: "/",
        element: (
          <AuthProvider>
            <Home />
            </AuthProvider>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/residentialSolar", element:  <ResidentialSolar />,
    children:[
      { path: "/residentialSolar", element:<AuthProvider><RsHome/></AuthProvider>},
      {path: "/residentialSolar/:id", element:<DynamicProjects/>,
    loader:({params})=> fetch(`http://localhost:2000/projects/${params.id}`)
    }
    ]
  }
]);
export default router;
