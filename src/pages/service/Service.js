import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaStar } from 'react-icons/fa';

const Service = ({ service }) => {
    const { _id, name, img, rating, description, price } = service;
    console.log(description)
    return (
        <div>
            <div>
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

                </Link>
                <div>{description}</div>
            </div>
        </div>
    );
};

export default Service;