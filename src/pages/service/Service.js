import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { ImageViewer } from "react-image-viewer-dv"

const Service = ({ service }) => {
    const { _id, name, img, rating, description, price } = service;
    return (
        <div>
            <div>
                <Link href="#" className="block p-4 mx-auto rounded-lg shadow-sm shadow-indigo-100">
                    <ImageViewer>
                        <img src={img} alt="" className='w-80 h-80 mx-auto' />
                    </ImageViewer>
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
                            <Link to={`/details/${_id}`}><button className="btn btn-link">View details</button></Link>

                        </div>
                    </div>
                    <div>
                        {
                            description.slice(0, 100)
                        }...
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Service;