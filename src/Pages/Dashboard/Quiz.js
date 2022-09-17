import React, { useState } from 'react';
import { useEffect } from 'react';
// import Select from "react-select";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Mcq from './Mcq';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [mcq, setMcq] = useState(true);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setQuestions(data))
    })
    const onSubmit = data => console.log(data);

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        <>
            <div className='flex flex-col justify-center items-center w-screen'>
                <div> <h3>Question</h3></div>
                <div className="dropdown dropdown-right ml-12 mt-12">
                    <label tabIndex={0} className="btn btn-info btn-wide font-bold text-white">Select Question type</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/mcq'>MCQs</Link></li>
                        <li><Link to='/shortQ'>Short Questions</Link></li>
                    </ul>
                </div>
                <div><button className='btn btn-primary'>Points :</button></div>
            </div>
        </>

        // <input type="submit" />
        // </form>
    );
};

export default Quiz;