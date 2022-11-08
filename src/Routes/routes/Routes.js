import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main/Main';
import Blog from '../../pages/blog/Blog';
import Home from '../../pages/home/Home';
import Footer from '../../Shared/footer/Footer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {

                path: '/blog',
                element: <Blog></Blog>
            }, {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;