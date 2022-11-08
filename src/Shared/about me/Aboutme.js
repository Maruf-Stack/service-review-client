import React from 'react';
const Aboutme = () => {

    const img1 = 'https://www.color-meanings.com/wp-content/uploads/red-ladybug-small-black-spots-grass-1024x682.jpeg';
    const img2 = 'https://76crb34usu-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/Tulip_Things_that_are_red.jpg;';
    const img3 = 'https://hips.hearstapps.com/edc.h-cdn.co/assets/17/01/wedding-photos-30.jpeg';
    const img4 = 'https://i0.wp.com/simonemiglietta.com/wp-content/uploads/engagement-vacation-photographer-tuscany-039.jpg?fit=1600%2C1067&ssl=1';
    const img5 = 'https://cdn.citymapia.com/assets/business/478/feeds/2368/478_636843975235870596.jpg?rendered=true';
    const img6 = 'https://img.onethreeonefour.com/blg/bali-anniversary-couple-shoot-beach-12.jpg'
    return (
        <div>
            <div className='grid grid-cols-2 gap-10 mx-20 mt-10'>
                <div className="gallery">
                    <h1 className='text-2xl font-bold'>Here is some of my photography</h1>
                    <br></br>
                    <hr />
                    <div className='grid grid-cols-2 mt-6'>
                        <img src={img1} alt="" className='w-full h-56' />
                        <img src={img2} alt="" className='w-full h-56' />
                        <img src={img3} alt="" className='w-full h-56' />
                        <img src={img4} alt="" className='w-full h-56' />
                        <img src={img5} alt="" className='w-full h-56' />
                        <img src={img6} alt="" className='w-full h-56' />


                    </div>
                </div>
                <div className="myskill">
                    my skill
                </div>
            </div>
        </div>
    );
};

export default Aboutme;