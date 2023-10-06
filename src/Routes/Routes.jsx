import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/>},
        {path: "/login", element: <Login/>},
      {path: "/register", element: <Register/>},

      ]
    },
  ]);
  export default router;