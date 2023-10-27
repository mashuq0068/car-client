import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services , setServices]  = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="grid grid-cols-3 w-[80%] mx-auto gap-5">
            {services.map(service => <Service key={service._id} service={service}></Service>)}
            
        </div>
    );
};

export default Services;