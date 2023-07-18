import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import { SignalIcon } from "@heroicons/react/24/solid";
import Signup from "../Pages/Signup/Signup";


const routes = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/signup', 
                element: <Signup></Signup>
            }
        ]

    }
])


export default routes;