import React from 'react';
import Header from '../../Components/Header';
import { useLoaderData } from 'react-router-dom';
import ShowAllDataCard from './ShowAllDataCard';

const ShowAllService = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <div className='bg-[#32c1ce]'>
                <Header></Header>

            </div>
            <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    data.map(showAllData => <ShowAllDataCard
                        key={showAllData.id}
                        showAllData={showAllData}
                    >

                    </ShowAllDataCard>)
                }
            </div>
        </div>
    );
};

export default ShowAllService;