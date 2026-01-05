import React from 'react';
import RecentPost from './RecentPost';
import TrendingPost from './TrendingPost';
import Service from '../WhatWeDo/Service';

const BlogPostRight = ({blogPost}) => {


    return (

        <div className='space-y-5'>
            <section className='hidden md:block'>
                <RecentPost blogPost={blogPost}></RecentPost>
            </section>
            <section>
                <TrendingPost blogPost={blogPost}></TrendingPost>
            </section>
            <section>
                
            </section>
        </div>

    );
};

export default BlogPostRight;