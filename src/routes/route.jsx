import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../components/profile/LogIn";
import Register from "../components/profile/Register";

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
    ]
   }, 
]);

export default routes;