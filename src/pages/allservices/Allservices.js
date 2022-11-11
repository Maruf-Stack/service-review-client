import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/footer/Footer';
import Service from '../service/Service';

const Allservices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/allservices';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div >
                <div className='grid grid-cols-1 lg:mx-20 lg:my-14 lg:grid-cols-3'>
                    {
                        services.map(service => <Service service={service} key={service._id}></Service>)
                    }
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Allservices;