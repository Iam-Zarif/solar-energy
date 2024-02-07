import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthProvider from "../AuthProvider/AuthProvider";
import ResidentialSolar from "../Pages/ResidentialSolar/ResidentialSolar";
import RsHome from "../Components/RsHome/RsHome";
import DynamicProjects from "../Components/RsProjects/DynamicProjects";
import Contact from "../Pages/Contact/Contact";
import AllFeedbacks from "../Pages/AllFeedbacks/AllFeedbacks";
import UserInfo from "../Pages/UserInfo/UserInfo";
import AdvantagesDynamicPage from "../Components/Advantages/AdvantagesDynamicPage";
const router = createBrowserRouter([
  {
    path: "/*",
    element: <div>Error hayhay</div>,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthProvider>
            <Home />
          </AuthProvider>
        ),
      },
      {
        path: "/benefits/:id",
        element: <AdvantagesDynamicPage/>,
        loader: ({params})  => 
        fetch(`https://solar-panel-server-ecjps02r4-iam-zarif.vercel.app/benefits/${params.id}`)
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/contact", element: <Contact /> },
      { path: "/feedbacks", element: <AllFeedbacks /> },
      { path: "/userInfo", element: <UserInfo /> ,},
    ],
  },
  {
    path: "/residentialSolar",
    element: <ResidentialSolar />,
    children: [
      {
        path: "/residentialSolar",
        element: (
          <AuthProvider>
            <RsHome />
          </AuthProvider>
        ),
      },
      {
        path: "/residentialSolar/:id",
        element: <DynamicProjects />,
        loader: ({ params }) =>
          fetch(`https://solar-panel-server-ecjps02r4-iam-zarif.vercel.app/projects/${params.id}`),
      },
     
    ],
  },
]);
export default router;
