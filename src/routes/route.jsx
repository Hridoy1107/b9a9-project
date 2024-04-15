import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../components/profile/LogIn";
import Register from "../components/profile/Register";
import PrivateRoute from '../pages/private/PrivateRoute';
import Details from '../pages/private/Details';
import User from "../pages/private/User";
import Update from "../pages/private/Update";
import About from "../pages/About";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('../houses.json')
            },
            {
                path: "/user",
                element: <PrivateRoute><User></User></PrivateRoute>,
            },
            {
                path: "/update",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
            },
        ]
    },
]);

export default routes;