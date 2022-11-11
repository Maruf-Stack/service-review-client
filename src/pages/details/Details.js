import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
const Details = () => {
    const service = useLoaderData()
    const { _id, name, img, rating, description, price } = service

    return (
        <div>
            <div className='mx-5 lg:mx-20'>
                <Link href="#" className="block p-4 mx-auto rounded-lg shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src={img}
                        className='w-full text-center rounded lg:h-72 lg:w-72 h-80'
                    />

                    <div className="mt-2">
                        <dl>
                            <div>
                                <dt className="text-lg sr-only">Price</dt>

                                <dd className="text-sm text-gray-600">${price}</dd>
                            </div>

                            <div>
                                <dt className="sr-only">Address</dt>

                                <dd className="text-2xl font-medium">{name}</dd>
                            </div>
                        </dl>

                        <div className="flex items-center gap-8 mt-3 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center">


                                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p className="mr-1 text-gray-500">{rating}</p>
                                </div>
                                <FaStar></FaStar>
                            </div>

                        </div>
                    </div>
                    <div>
                        {
                            description
                        }
                    </div>
                </Link>

                <div className='grid w-6/12 grid-cols-2 gap-20 mx-auto mt-10 '>
                    <button className="text-gray-200 btn btn-info">See reviews</button>
                    <button className="text-gray-200 btn btn-accent">Review please</button>
                </div>

            </div>
        </div>
    );
};

export default Details;