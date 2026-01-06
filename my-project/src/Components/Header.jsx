
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthPorvider';


const Header = () => {

    const { user, logoutUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(() => { })
    }



    return (
        <div className="navbar bg-gradient-to-r from-[#32c1ce]/20 to-[#5FD1D8]/20 backdrop flex justify-evenly item-center">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <Link to={'/'}>Home</Link>
                    <Link>About</Link>
                    <Link>Doctor</Link>
                    <Link>My Accont</Link>
                    <Link to={'/blog-post'}>Blog</Link>
                </ul>
            </div>
            <div className='text-white navbar-center hidden lg:flex'>
                <ul className="menu menu-horizontal px-1 gap-3">
                    <Link to={'/'}>Home</Link>
                    <Link>About</Link>
                    <Link>Doctor</Link>
                    <Link>My Accont</Link>
                    <Link to={'/blog-post'}>Blog</Link>

                </ul>
            </div>
            <div >
                {
                    user && user?.email ? (
                        <button onClick={handleLogout} className='btn bg-[#29A3AA] text-white'>Logout</button>
                    )
                        :
                        <button onClick={() => setOpen(true)} className='btn bg-[#29A3AA] text-white'>Make An Appointment</button>

                }

            </div>

                {/* This modal use for appointment */}
            {
                open && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md shadow-xl animate-scale">
                            <h2 className="text-xl font-semibold mb-2">
                                Popup Card
                            </h2>

                            <p className="text-gray-600 text-sm">
                                Eta react state diye banano popup card.
                            </p>

                            <div className="mt-4 text-right">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="btn btn-error btn-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>



    );
};

export default Header;