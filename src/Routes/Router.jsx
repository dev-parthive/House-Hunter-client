import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


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
            }
        ]

    }
])


export default routes;