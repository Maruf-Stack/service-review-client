import React, { useEffect, useState } from 'react';
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
        <div className='grid grid-cols-3'>
            {
                services.map(service => <Service service={service} key={service._id}></Service>)
            }
        </div>
    );
};

export default Services;