import React, { useEffect } from 'react';

const Services = () => {

    useEffect(() => {
        const url = 'http://localhost:5000/services';
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Services;