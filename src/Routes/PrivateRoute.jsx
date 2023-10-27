import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";

import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {user} = useContext(AuthContext)
   if(user){
    return children
   }
   return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default PrivateRoute;