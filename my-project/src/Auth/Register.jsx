import React, { useContext } from 'react';
import { AuthContext } from './AuthPorvider';

const Register = () => {

    const {createUser}=useContext(AuthContext);
    // console.log(createUser);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log({name,photo,email,password})

        createUser(email,password)
        .then(res=>{
            
            console.log("register user",res.user)
        })
        .catch(error=>console.log(error.code))

    }



    return (
        <div className='w-9/12 mx-auto mt-10 */:border'>
            <div className="card my-10  w-[65%] mx-auto p-4 shadow-md">
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
                </form>
            </div>
        </div>
    );
};

export default Register;