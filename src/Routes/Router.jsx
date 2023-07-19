import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CommingSoon from "../Components/CommingSoon/CommingSoon";
import SearchResult from "../Pages/SearchResult/SeasrchResult";
import DashboardLayout from "../Layout/DashobardLayout";
import Welcome from "../Pages/Dashboard/Welcome";


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
            }, 
            {
                path: '/coming-soon', 
                element: <CommingSoon></CommingSoon>
            }, 
            {
                path: '/search-result', 
                element: <SearchResult></SearchResult>
            }
        ]

    }, 
    {
        path: '/dashboard', 
        element: <DashboardLayout></DashboardLayout> ,
        errorElement: <ErrorPage></ErrorPage> , 
        children: ([
            {
                path: '', 
                element: <Welcome></Welcome>
            }
        ])
    }
])


export default routes;