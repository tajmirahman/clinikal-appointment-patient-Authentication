import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TrendingPost = ({ blogPost }) => {
    const sliceBlog = blogPost.slice(0, 5);
    const [current, setCurrent] = useState(0);

    useEffect(() => {

        if (sliceBlog.length === 0) return;

        const sliderInterval = setInterval(() => {
            setCurrent((prev) => {
                return prev === blogPost.length - 1 ? 0 : prev + 1;
            })
        }, 3000);
        return () => {
            clearInterval(sliderInterval);
        }
    }, [blogPost.length, sliceBlog.length])


    return (
        <div className='p-2 shadow-lg'>
            <h2 className='text-center text-xl'>Trending Post</h2>
            <hr className='w-[60px] mx-auto bg-sky-300 border-t-2 my-1' />
            <hr className='w-[50px] mx-auto bg-sky-300 border-t-2' />

            <div className="w-full mt-3">
                {/* Single Card */}
                <div className="card bg-base-100 shadow-md p-3 text-center">
                    <img
                        src={blogPost[current]?.image}
                        alt=""
                        className="w-20 h-20 mx-auto object-cover rounded"
                    />

                    <div className="mt-2 text-sm space-y-1">
                        <Link
                            to={`/blog-post-details/${blogPost[current]?.id}`}
                            className="hover:text-[#29A3AA] font-medium"
                        >
                            {blogPost[current]?.title}
                        </Link>

                        <p className="text-gray-500">
                            {blogPost[current]?.date}
                        </p>
                    </div>
                    <div className='flex justify-center gap-2 mt-2'>
                        {
                          sliceBlog.map((_,index)=>(
                            <button
                            key={index}
                            onClick={()=>setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-[#29A3AA] scale-125" : "bg-gray-300"}`}
                            ></button>
                          ))  
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrendingPost;