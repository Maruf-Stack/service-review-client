import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <div className='grid grid-cols-1 lg:mx-20 lg:my-14 lg:grid-cols-3'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
            <div className='text-center'>
                <Link to='/allservices'><button className="mb-8 text-gray-100 btn btn-info">See all...</button></Link>
            </div>
        </div>
    );
};

export default Services;