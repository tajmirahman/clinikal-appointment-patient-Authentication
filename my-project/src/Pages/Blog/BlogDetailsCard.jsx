import { Link } from 'react-router-dom';
import proPic from '../../assets/image/download.png'

const BlogDetailsCard = ({ newBlog }) => {
    return (
        <>
            <div className="w-9/12 mx-auto space-y-4 shadow-lg p-2">

                <figure className='*/:border-4 border-gray-300'>
                    <img className='w-96 mx-auto p-2' src={newBlog.image} alt="" />
                </figure>
                <h2 className='text-center text-3xl'>{newBlog.title}</h2>
                <div className='flex justify-center items-center gap-5'>
                    <div className='flex justify-center items-center'>
                        <img className='w-8 h-8 object-cover' src={proPic} alt="" />
                        <p>{newBlog.author}</p>
                    </div>
                    <div>{newBlog.date}</div>
                </div>
                <p className='justify-start text-sm text-justify'>{newBlog.details}</p>

            </div>
            <div className='w-9/12 mx-auto space-y-4 shadow-lg p-2 mt-10'>
                <div className="card text-center">
                    <h2 className='text-2xl'>Comments (0)</h2>
                    <hr className='w-[60px] mx-auto bg-sky-300 border-t-2 my-2' />
                    <hr className='w-[50px] mx-auto bg-sky-300 border-t-2' />
                    <p className='my-5'>No Comments Found!!!</p>
                </div>
            </div>
            <div className='w-9/12 mx-auto space-y-4 shadow-lg p-2 mt-10'>
                <div className="card text-center">
                    <h2 className='text-2xl'>Leave a reply</h2>
                    <hr className='w-[60px] mx-auto bg-sky-300 border-t-2 my-2' />
                    <hr className='w-[50px] mx-auto bg-sky-300 border-t-2' />
                    <p className='mt-5'>You must be registered and logged in to Comment</p>
                    <div className='my-5'>
                        <Link to={'/auth/login'} className='btn bg-[#32a3ac]'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsCard;