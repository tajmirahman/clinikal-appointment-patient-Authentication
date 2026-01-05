import { Link, useLoaderData } from 'react-router-dom';
import whatWeDo from '../../assets/image/what-we-do.jpg'
import Service from './Service';
import { useState } from 'react';


const WhatWeDo = () => {
    const data = useLoaderData();
    console.log(data.length)

    const [showAll, setShowAll] = useState(false);

    const visibaleData = showAll ? data : data.slice(0, 6);

    return (
        <div className='w-9/12 mx-auto py-10'>
            <h2 className="text-center text-3xl">WHAT WE DO</h2>
            <hr className="w-2/6 mx-auto border-t-2 border-black mt-2" />


            <div className='md:flex gap-5 mt-10'>
                <div className='flex-1'>
                    <figure className='w-full h-[500px]  '>
                        <img className='w-full h-[460px]  border-2 border-[#32a3ac]' src={whatWeDo} alt="" />
                    </figure>
                </div>
                <div className='flex-1 space-y-4 text-sm text-justify'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima iusto praesentium maiores corporis perspiciatis itaque, molestiae dolorum eius ipsam quos fugit sunt consequuntur numquam omnis, doloremque labore quae rem!</p>
                    <div className='grid grid-cols-3 grid-rows-2 gap-6'>
                        {
                            visibaleData.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>

                    <div className='flex justify-center items-center'>
                        {
                            data.length > 6
                            &&
                            <Link to={'/show-more'} onClick={() => { setShowAll }} className="btn bg-[#32a3ac]">show more</Link>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhatWeDo;