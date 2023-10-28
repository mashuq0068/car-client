import { useEffect, useState } from "react";
import Service from "../Service/Service";
import axios from "axios";


const Services = () => {
    const [services , setServices]  = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/services' , {withCredentials:true} )
        .then(res => {
            console.log(res.data)
            setServices(res.data)
        })
        
        
    },[])
    return (
        <div className="grid grid-cols-3 w-[80%] mx-auto gap-5">
            {services.map(service => <Service key={service._id} service={service}></Service>)}
            
        </div>
    );
};

export default Services;