import { useEffect, useRef, useState } from "react";
import SingleDoctor from "./SingleDoctor";

const OurTeams = () => {
    const [ourTeam, setOurTeam] = useState([]);
    const [active, setActive] = useState(0);

    const visibleCard = 3;
    const intervalRef = useRef(null);

    useEffect(() => {
        if (ourTeam.length < visibleCard) return;
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setActive(prev => {
                if (prev >= ourTeam.length - visibleCard) {
                    return 0;
                }
                return prev + 1;
            });
        }, 3000);

        return () => {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    }, [ourTeam.length]);

    const showCardDoctor = ourTeam.slice(active, active + visibleCard);

    useEffect(() => {
        fetch("/ourTeam.json")
            .then(res => res.json())
            .then(data => setOurTeam(data));
    }, []);

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-[#2fa4aa] to-[#5fd1d8] ">
            <div className="mb-10 space-y-5 pt-3">
                <h2 className='text-3xl text-center'>Our Team</h2>
                <hr className="w-[200px] mx-auto border-t-2 border-black" />
            </div>
            <div className="flex justify-center items-center gap-5">
                {showCardDoctor.map((doc, index) => (
                    <SingleDoctor
                        key={doc.id}
                        doc={doc}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurTeams;
