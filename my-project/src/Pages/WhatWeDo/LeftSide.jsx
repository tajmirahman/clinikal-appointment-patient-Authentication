import React from 'react';

const LeftSide = ({showData}) => {
    return (
        <div className='space-y-5 shadow-lg p-3'> 
            <figure className='w-full h-[350px] object-cover '>
                <img className='w-full h-[350px] object-contain' src={showData.image_url} alt="" />
            </figure>
            <p className='text-justify text-sm'>{showData.details}</p>
        </div>
    );
};

export default LeftSide;