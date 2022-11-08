import React from 'react';
const Aboutme = () => {

    const img1 = 'https://www.color-meanings.com/wp-content/uploads/red-ladybug-small-black-spots-grass-1024x682.jpeg';
    const img2 = 'https://76crb34usu-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/Tulip_Things_that_are_red.jpg;';
    const img3 = 'https://hips.hearstapps.com/edc.h-cdn.co/assets/17/01/wedding-photos-30.jpeg';
    const img4 = 'https://i0.wp.com/simonemiglietta.com/wp-content/uploads/engagement-vacation-photographer-tuscany-039.jpg?fit=1600%2C1067&ssl=1';
    const img5 = 'https://cdn.citymapia.com/assets/business/478/feeds/2368/478_636843975235870596.jpg?rendered=true';
    const img6 = 'https://img.onethreeonefour.com/blg/bali-anniversary-couple-shoot-beach-12.jpg';
    const img7 = 'https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2017%2F11%2F11%2F96223d21c415f7ef334b6856c4e9dd1e-Google-Maps.jpg?auto=format&fit=fill&bg=000000&q=35&w=1200♫'
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
                <div className="p-20 myskill">
                    <h1 className='text-3xl font-bold text-center'>My skills</h1><br></br>
                    <hr />
                    <ul className='mt-3 text-xl text-slate-600'>
                        <li>• Photography</li>
                        <li>• Photo editing</li>
                        <li>• Motion grafics</li>
                        <li>• Video editing</li>
                    </ul>
                    <h1 className='mt-5 text-3xl font-bold text-center'>My Location</h1><br></br>
                    <hr />
                    <h2 className='mt-3 mb-5 text-lg font-normal text-slate-600'> You can hire me by this website or face to face.<br></br>
                        My office location is given below</h2>
                    <h2 className='mb-3 text-slate-500'>My office location:Road no 17,Banani,Dhaka</h2>
                    <img src={img7} alt="" className='h-56 w-96' />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;