import { useContext, useState } from "react";
import { AuthContext } from "./AuthPorvider";
import { Link } from "react-router-dom";


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email,password)

        loginUser(email, password)
            .then(() => { })
            .catch(err => setError(err.code))

        form.reset();
    }


    return (
        <div className='w-9/12 mx-auto mt-10 */:border'>
            <div className="card my-10  md:w-[65%] mx-auto p-4 shadow-md">
                <h2 className='text-4xl text-center'>Login Form</h2>
                <form onSubmit={handleLogin} className="body p-2">
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" name="email" className="input md:w-[70%]" placeholder="Type here email" />
                    </fieldset>
                    <fieldset className="fieldset ml-3">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" name="password" className="input md:w-[70%]" placeholder="Type here password" />
                        <p className="label text-red-400 underline">Forget your password?</p>
                    </fieldset>

                    {
                        error && <p className='text-red-400 text-center'>{error}</p>
                    }

                    <div className='flex justify-center mt-3'>
                        <button className='btn bg-[#32a3ac] text-white'>Login</button>
                    </div>
                    <p className="mt-3">if you do not have an account. Pleases <Link to={'/auth/register'} className="text-red-400 underline">register?</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;