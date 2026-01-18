import React, { useContext } from 'react';

import { AuthContext } from '../Auth/AuthPorvider';
import Header from '../Components/Header';

const PatientDetails = () => {

    const { patient } = useContext(AuthContext);
    // console.log(patient)

    if (!patient) {
        return <p>No patient data found</p>;
    }

    return (
        <div>
            <div className='bg-[#32a3ac]'>
                <Header></Header>
            </div>
            <div className="min-h-screen w-3/5 mx-auto flex justify-center items-center shadow-lg mt-5">
                <div className="bg-white p-6 rounded-xl  w-full max-w-md">
                    <h2 className="text-xl font-bold mb-4 text-center">
                        Appointment Details
                    </h2>

                    {patient.map((patient, index) => (
                        <div
                            key={patient.id}
                            className="border p-3 rounded-lg mb-3"
                        >
                            <p className="font-semibold mb-1">#id-{index + 1}</p>
                            <p><b>Name:</b> {patient.name}</p>
                            <p><b>Email:</b> {patient.email}</p>
                            <p><b>Disease:</b> {patient.disease}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;