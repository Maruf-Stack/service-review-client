import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main/Main';
import Allservices from '../../pages/allservices/Allservices';
import Blog from '../../pages/blog/Blog';
import Details from '../../pages/details/Details';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Myreviews from '../../pages/my reviews/Myreviews';
import Regi from '../../pages/registraion/Regi';
import Private from '../private-route/Private';

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
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/regi',
                element: <Regi></Regi>
            }, {
                path: '/allservices',
                element: <Allservices></Allservices>
            }
            , {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://service-review-server-maruf-stack.vercel.app/allservices/${params.id}`),
                element: <Details></Details>
            }, {
                path: '/myreviews',
                element: <Private><Myreviews></Myreviews></Private>
            }
        ]
    }
])

export default router;