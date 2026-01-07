import React, { useContext } from 'react';

import { AuthContext } from '../Auth/AuthPorvider';

const PatientDetails = () => {

    const {patient}=useContext(AuthContext);
console.log(patient)

    if (!patient) {
        return <p>No patient data found</p>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Patient Information
                </h2>

                <p className="mb-2">
                    <span className="font-semibold">Name:</span> {patient.name}
                </p>

                <p>
                    <span className="font-semibold">Disease:</span> {patient.disease}
                </p>
            </div>
        </div>
    );
};

export default PatientDetails;