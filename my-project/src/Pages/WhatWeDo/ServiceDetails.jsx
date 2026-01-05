import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const ServiceDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [showData, setShowData] = useState([]);

    useEffect(() => {
        const findData = data.find(singleData => singleData.id == id);
        setShowData(findData)
    }, [data, id])

    // console.log(showData)
    return (
        <div >

            <div className='bg-[#32c1ce]'>
                <Header></Header>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 w-9/12 mx-auto gap-5 mt-10'>
                <aside className='col-span-9 '>
                    <LeftSide showData={showData}></LeftSide>
                </aside>
                <aside className='col-span-3 hidden md:block'>
                    <RightSide data={data}></RightSide>
                </aside>
            </div>

        </div>
    );
};

export default ServiceDetails;