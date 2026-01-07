import React, { useContext } from 'react';
import { AuthContext } from './AuthPorvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const { createUser, userUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password })

        createUser(email, password)
            .then(() => {

                return userUpdate({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => console.log(err.code))
            })
            .catch(error => console.log(error.code))

    }



    return (
        <div className='w-9/12 mx-auto mt-10 */:border'>
            <div className="card my-10  md:w-[65%] mx-auto p-4 shadow-md">
                <h2 className='text-4xl text-center'>Register Form</h2>
                <form onSubmit={handleSubmit} className="body p-2">
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" name='name' className="input w-[70%]" placeholder="Type here name" />
                    </fieldset>
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Photo Url</legend>
                        <input type="text" name='photo' className="input w-[70%]" placeholder="Type here photo url" />
                    </fieldset>
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" name='email' className="input w-[70%]" placeholder="Type here email" />
                    </fieldset>
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" name='password' className="input w-[70%]" placeholder="Type here password" />
                    </fieldset>

                    <div className='flex justify-center mt-3'>
                        <button className='btn bg-[#32a3ac] text-white'>Register</button>
                    </div>
                    <p className="mt-3">if you have an account. Pleases <Link to={'/auth/login'} className="text-red-400 underline">login?</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;