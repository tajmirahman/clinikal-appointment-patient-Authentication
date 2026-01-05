import { useEffect, useState } from "react";
import LatestPostCard from "./LatestPostCard";


const LatestPost = () => {

    const [latestPost, setLatestPost] = useState([]);
    const postSlice=latestPost.slice(1,4);

    useEffect(() => {
        fetch('/latestPost.json')
            .then(res => res.json())
            .then(data => setLatestPost(data))
    }, []);

    return (
        <div className="w-9/12 mx-auto mt-5">
            <h2 className='text-3xl text-center'>Latest Post</h2>
            <hr className="w-[200px] mx-auto border-t-2 border-black" />
            <div className="md:flex gap-3 my-5">
                {
                    postSlice?.map(newPost => <LatestPostCard
                        key={newPost.id}
                        newPost={newPost}
                    ></LatestPostCard>)
                }
            </div>
        </div>
    );
};

export default LatestPost;