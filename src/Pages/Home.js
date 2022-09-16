import React from 'react';
import BannerImage from '../Assets/image (1).jpg'
import BannerImage2 from '../Assets/image (2).jpg'

const Home = () => {
    return (
        <div className='h-screen'>
            <h2 className='text-5xl font-bold text-center mt-12'>Fully Automated Exam Proctoring</h2>
            <h3 className='text-center text-3xl mt-5 font-mono'>No More Cheating Online Test</h3>
            <div className='flex justify-center items-center mt-10'>
                <button className='btn btn-accent btn-wide font-bold'>Take Demo Test</button>
                <button className='btn btn-success font-bold  ml-5 btn-wide'>Create Test</button>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <img style={{ width: '350px' }} src={BannerImage} alt="" />
                <div className='ml-6 mr-6'><img style={{ width: '350px' }} src={BannerImage2} alt="" /></div>
                <img style={{ width: '350px' }} src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Home;