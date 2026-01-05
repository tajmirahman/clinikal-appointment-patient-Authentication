import React from 'react';

const Login = () => {
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <div className="card my-10 */:border w-[65%] mx-auto p-2">
            <h2 className='text-4xl text-center'>Login Form</h2>
                <div className="body ">
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input w-[70%]" placeholder="Type here email" />
                    </fieldset>
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input w-[70%]" placeholder="Type here password" />
                        <p className="label">Forget your password</p>
                    </fieldset>
                    <button  className='btn text-center'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;