import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import College from "../page/College/College";
import CollegeDetails from "../page/College/CollegeDetails";
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
        loader: ({params})=>fetch(`http://localhost:5000/colleges/${params.id}`)
      }
    ],
  },
]);

export default router;
