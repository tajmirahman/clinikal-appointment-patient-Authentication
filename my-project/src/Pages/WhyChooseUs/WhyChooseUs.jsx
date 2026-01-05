import { useEffect, useState } from "react";
import SingleService from "./SingleService";


const WhyChooseUs = () => {
    const [ourService,setOurService]=useState([]);

    useEffect(()=>{
        fetch("/medical_services.json")
        .then((res)=> res.json())
        .then(data=>setOurService(data));
    },[])
    return (
        <div className="w-9/12 mx-auto mt-10">
            <h2 className='text-3xl text-center'>Why Choose Us</h2>
            <hr className="w-2/6 mx-auto border-t-2 border-black mt-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
                {
                    ourService.map(service=><SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;