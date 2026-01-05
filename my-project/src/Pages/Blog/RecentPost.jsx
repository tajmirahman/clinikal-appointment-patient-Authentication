import React from 'react';
import { Link } from 'react-router-dom';

const RecentPost = ({blogPost}) => {
    const sliceBlog=blogPost.slice(3,6);


    return (
        <div className='p-2 shadow-lg'>
            <h2 className='text-center text-xl'>Recent Post</h2>
            <hr className='w-[60px] mx-auto bg-sky-300 border-t-2 my-1' />
            <hr className='w-[50px] mx-auto bg-sky-300 border-t-2' />

            <div className='w-full mt-2 space-y-3'>
            {
                sliceBlog?.map(blog=>(
                    <div className='flex md:justify-center items-center gap-4'>
                        <img className='w-16 h-16 object-cover' src={blog.image} alt="" />
                        <div className='text-sm '>
                            <Link to={`/blog-post-details/${blog.id}`} className='hover:text-[#29A3AA]'>{blog.title}</Link>
                            <p className='hover:text-[#29A3AA]'>{blog.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        </div>
    );
};

export default RecentPost;