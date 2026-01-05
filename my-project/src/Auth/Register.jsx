import React from 'react';

const Register = () => {
    return (
        <div className='w-9/12 mx-auto mt-10 */:border'>
            <div className="card my-10  w-[65%] mx-auto p-4 shadow-md">
                <h2 className='text-4xl text-center'>Register Form</h2>
                <div className="body p-2">
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input w-[70%]" placeholder="Type here name" />
                    </fieldset>
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Photo Url</legend>
                        <input type="text" className="input w-[70%]" placeholder="Type here photo url" />
                    </fieldset>
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input w-[70%]" placeholder="Type here email" />
                    </fieldset>
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input w-[70%]" placeholder="Type here password" />
                    </fieldset>

                    <div className='flex justify-center mt-3'>
                        <button className='btn bg-[#32a3ac] text-white'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;