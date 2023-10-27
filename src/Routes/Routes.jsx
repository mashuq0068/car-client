import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import CheckOut from "../Components/Checkout/CheckOut";
import CheckOutProducts from "../Components/CaheckoutProducts/CheckOutproducts";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
        {
            path:'/',
            element:<HomePage></HomePage>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'signUp',
            element:<SignUp></SignUp>
           },
           {
            path:'/checkOut/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
           },
           {
            path:'/checkOutProducts',
            element:<PrivateRoute>
                <CheckOutProducts>

                </CheckOutProducts>
                </PrivateRoute>
           }
    ]
   },
   
])


export default router