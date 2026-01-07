import React, { useContext } from 'react';

import { AuthContext } from '../Auth/AuthPorvider';

const PatientDetails = () => {

    const {patient}=useContext(AuthContext);
console.log(patient)

    if (!patient) {
        return <p>No patient data found</p>;
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                    All Patient Details
                </h2>

                {patient.map(patient => (
                    <div
                        key={patient.id}
                        className="border p-3 rounded-lg mb-3"
                    >
                        <p><b>Name:</b> {patient.name} {patient.length}</p>
                        <p><b>Disease:</b> {patient.disease}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientDetails;