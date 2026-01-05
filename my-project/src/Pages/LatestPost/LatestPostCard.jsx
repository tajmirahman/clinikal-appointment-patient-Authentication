import { FaEye } from 'react-icons/fa';
import proPic from '../../assets/image/download.png'
import { Link } from 'react-router-dom';

const LatestPostCard = ({ newPost }) => {
    console.log(newPost)
    return (
        <div className="card w-96 shadow-lg p-3">
            <figure>
                <img className='w-full h-full object-cover' src={newPost.image} alt="" />
            </figure>

            <div className=''>
                <h2 className='mt-3'>{newPost.title.length > 33 ?newPost.title.slice(0,25)+ '...' :newPost.title}</h2>
                <hr className='w-[300px]  mx-auto border-t-2 my-2' />
            </div>

            <div className='flex gap-3'>
                <div className='flex justify-center items-center border-r-2'>
                    <figure className='w-12 h-12 object-cover'>
                        <img className='w-12 h-12' src={proPic} alt="" />
                    </figure>
                    <p className='text-sm mr-2'>{newPost.author}</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Link to={`/blog-post-details/${newPost.id}`}><FaEye /></Link>
                    <Link to={`/blog-post-details/${newPost.id}`} className='text-sm'>read more</Link>
                </div>
            </div>

        </div>
    );
};

export default LatestPostCard;