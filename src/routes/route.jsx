import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../components/profile/LogIn";
import Register from "../components/profile/Register";
import PrivateRoute from '../pages/private/PrivateRoute';
import Details from '../pages/private/Details';

const routes = createBrowserRouter([
   {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <LogIn></LogIn>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('../houses.json')
      },
    ]
   }, 
]);

export default routes;