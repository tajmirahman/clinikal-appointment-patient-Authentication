import whatweDo from '../../assets/image/what-we-do.jpg'
import { useEffect, useState } from 'react';
import WhatWeAre from '../../assets/image/WhatWeAre.jpg'
import SingleList from './SingleList';


const WhoWeAre = () => {

    const [clinicList, setClinicList] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch('/whatweare.json')
            .then(res => res.json())
            .then(data => {
                setClinicList(data.stats)
                setDescription(data.description)
            })

    }, [])

    console.log(clinicList)

    return (
        <div
            className="min-h-screen bg-contain bg-center"
            style={{ backgroundImage: `url(${whatweDo})` }}
        >
            <div className="min-h-screen p-4 text-white bg-[#32a3ac]/60">
                <h2 className="text-center text-3xl my-5">Who We Are</h2>
                <hr className="w-[300px] mx-auto border-t-2 border-black mt-2" />

                <div className="md:flex gap-10 mt-10 w-9/12 mx-auto">
                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            {clinicList.map(list => (
                                <SingleList key={list.id} list={list} />
                            ))}
                        </div>
                        <p className="text-sm text-justify">{description}</p>
                    </div>

                    <figure className="w-full h-[350px]">
                        <img
                            className="w-full h-full border-2 border-[#32a3ac] object-cover"
                            src={WhatWeAre}
                            alt=""
                        />
                    </figure>
                </div>
            </div>
        </div>

    );
};

export default WhoWeAre;