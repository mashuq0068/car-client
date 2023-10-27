import { useContext, useState } from "react";
import { useEffect } from "react";
import CheckProduct from "../CheckProduct/CheckProduct";
import axios from "axios";
import { AuthContext } from "../../Providers/Authprovider";


const CheckOutProducts = () => {
    const {user} = useContext(AuthContext)
    const [services , setServices] = useState([])
    console.log(user.email)
   
    const url = `http://localhost:5000/checkOutServices/${user?.email}`
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res =>{
            console.log(res.data)
             setServices(res.data)
            })
        
    },[url])
    return (
        <div className="grid grid-cols-1">
            {services.length}
          
            {services.map(service => <CheckProduct key={service._id} service={service}></CheckProduct>)}
        </div>
    );
};

export default CheckOutProducts;
