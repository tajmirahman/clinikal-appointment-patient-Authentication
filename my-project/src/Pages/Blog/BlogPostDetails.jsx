import { useLoaderData, useParams } from "react-router-dom";
import BlogDetailsCard from "./BlogDetailsCard";
import { useEffect, useState } from "react";
import BlogPostRight from "./BlogPostRight";
import Header from "../../Components/Header";


const BlogPostDetails = () => {
    const blogPost = useLoaderData();
    const { id } = useParams();
    // console.log({blogPost,id})
    const [newBlog, setNewBlog] = useState([]);

    useEffect(() => {

        const findBlog = blogPost.find(blog => blog.id == id);
        setNewBlog(findBlog);

    }, [blogPost, id])


    return (
        <div className="">
            <div className='bg-[#32c1ce]'>
                <Header></Header>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 md:w-9/12 mx-auto my-5">
                <aside className="col-span-9">
                    <BlogDetailsCard newBlog={newBlog}></BlogDetailsCard>
                </aside>

                <aside className="col-span-3">
                    <BlogPostRight blogPost={blogPost}></BlogPostRight>
                </aside>
            </div>
        </div>

    );
};

export default BlogPostDetails;