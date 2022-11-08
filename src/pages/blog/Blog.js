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
                <p className='text-gray-500 text-s font'><span className='text-xl font-normal text-green-700'>Answer : </span></p>
            </div>
            <div className="p-10 mb-8 que bg-cyan-200 rounded-xl">
                <h1 className='mb-3 text-xl font-normal text-gray-500'><span className='text-2xl font-semibold text-red-600'>Question 3 : </span></h1>
                <p className='text-gray-500 text-s font'><span className='text-xl font-normal text-green-700'>Answer : </span></p>
            </div>
            <div className="p-10 mb-8 que bg-cyan-200 rounded-xl">
                <h1 className='mb-3 text-xl font-normal text-gray-500'><span className='text-2xl font-semibold text-red-600'>Question 4 : </span></h1>
                <p className='text-gray-500 text-s font'><span className='text-xl font-normal text-green-700'>Answer : </span></p>
            </div>
        </div>
    );
};

export default Blog;