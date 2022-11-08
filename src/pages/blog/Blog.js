import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mx-20 mx-7'>
            <div className="p-10 mb-8 que bg-cyan-200 rounded-xl">
                <h1 className='mb-3 text-xl font-normal text-gray-500'><span className='text-2xl font-semibold text-red-600 '>Question 1 : </span>Difference between SQL and NoSQL?</h1>
                <p className='text-gray-500 text-s font'><span className='text-xl font-normal text-green-700'>Answer : </span> SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).NoSQL is Non-relational or distributed database system.SQL databases are not suited for hierarchical data storage.NoSQL databases are best suited for hierarchical data storage.</p>
            </div>
            <div className="p-10 mb-8 que bg-cyan-200 rounded-xl">
                <h1 className='mb-3 text-xl font-normal text-gray-500'><span className='text-2xl font-semibold text-red-600'>Question 2 : </span>What is JWT, and how does it work?</h1>
                <p className='text-gray-500 text-s font'><span className='text-xl font-normal text-green-700'>Answer : </span>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            </div>
            <div className="p-10 mb-8 que bg-cyan-200 rounded-xl">
                <h1 className='mb-3 text-xl font-normal text-gray-500'><span className='text-2xl font-semibold text-red-600'>Question 3 : </span>What is the difference between javascript and NodeJS?</h1>
                <p className='text-gray-500 text-s font'><span className='text-xl font-normal text-green-700'>Answer : </span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
            </div>
            <div className="p-10 mb-8 que bg-cyan-200 rounded-xl">
                <h1 className='mb-3 text-xl font-normal text-gray-500'><span className='text-2xl font-semibold text-red-600'>Question 4 : </span>How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-gray-500 text-s font'><span className='text-xl font-normal text-green-700'>Answer : </span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
            </div>
        </div>
    );
};

export default Blog;