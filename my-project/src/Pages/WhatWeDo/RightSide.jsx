import React from 'react';
import { Link } from 'react-router-dom';

const RightSide = ({data}) => {
    console.log(data)
    return (
        <div className='shadow-lg p-3'>
            
            <h2 className="text-center text-2xl">Our Services</h2>
            <hr className="w-2/6 mx-auto border-t-2 border-black mt-2" />
            <hr className="w-[50px] mx-auto border-t-2 border-black mt-2" />

            <div className='space-y-5  mt-10'>
                {
                    data.map(singleData=>(
                        <div className='flex justify-start items-center gap-3 shadow-sm'>
                            <img className='w-8 h-8 object-contain' src={singleData.icon} alt="" />
                            <Link to={`/service-details/${singleData.id}`} className='text-sm'>{singleData.disease_title}</Link>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RightSide;