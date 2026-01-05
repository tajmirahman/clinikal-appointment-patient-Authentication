import React from 'react';

const SingleService = ({ service }) => {
    // console.log(service)
    return (
        <div>
            <div className="card space-y-5">
                <figure className=' w-20 h-20 mx-auto *:border'>
                    <img className='w-20 h-20 p-2 hover:bg-[#32a3ac]' src={service.icon} alt="" />
                </figure>
                <div className='space-y-5'>
                    <h2 className='text-center font-semibold'>{service.title}</h2>
                    <p className='text-left text-sm'>{service.description}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleService;