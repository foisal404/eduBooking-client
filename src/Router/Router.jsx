import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import College from "../page/College/College";
import CollegeDetails from "../page/College/CollegeDetails";
import Addmission from "../page/addmission/Addmission";
import Login from "../page/Login/Login";
import Register from "../page/Login/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: '/college',
        element: <College/>
      },
      {
        path: '/college/details/:id',
        element: <CollegeDetails/>,
        loader: ({params})=>fetch(`https://edu-booking-server.vercel.app/colleges/${params.id}`)
      },
      {
        path: '/addmission',
        element:<Addmission/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/register',
        element:<Register/>
      }
    ],
  },
]);

export default router;
