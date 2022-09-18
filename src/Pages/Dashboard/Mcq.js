import React from 'react';

const Mcq = () => {
    return (
        <>
            <div className='p-24'>
                <div className='flex justify-center items-center flex-col mt-9'>
                    <div className='flex justify-between items-center w-96'>
                        <h2 className='text-xl font-bold'>Question</h2>
                        <div><input type="text" placeholder='Points' className='p-1' />
                        </div>
                    </div>
                </div>
                <div className='mt-10'><input type="text" placeholder='This is Question 1' className='p-1 w-1/2' w-screen />
                </div>
            </div>
        </>
    );
};

export default Mcq;