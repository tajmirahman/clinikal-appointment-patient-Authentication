import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import WhatWeDo from "../Pages/WhatWeDo/WhatWeDo";
import ShowAllService from "../Pages/WhatWeDo/ShowAllService";
import ServiceDetails from "../Pages/WhatWeDo/ServiceDetails";
import BlogPost from "../Pages/Blog/BlogPost";
import BlogPostDetails from "../Pages/Blog/BlogPostDetails";
import AuthLayout from "../Auth/AuthLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <WhatWeDo></WhatWeDo>,
                loader: () => fetch("/service.json")
            }
        ]
    },
    {
        path: '/show-more',
        element: <ShowAllService></ShowAllService>,
        loader: () => fetch("/service.json")
    },
    {
        path: '/service-details/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("/service.json")
    },
    {
        path: '/blog-post',
        element: <BlogPost></BlogPost>,
        loader: () => fetch('/latestPost.json')
    },
    {
        path: '/blog-post-details/:id',
        element: <BlogPostDetails></BlogPostDetails>,
        loader: () => fetch('/latestPost.json')
    },

    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>
    },
    {
        path: '*',
        element: <h1>This is error page</h1>
    }
]);

export default router;