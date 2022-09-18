import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';


// import auth from '../firebase.init';


const Dashboard = () => {
    // const [user] = useAuthState(auth)


    return (
        <div className="drawer drawer-mobile z-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-5xl mt-5 text-black-900 font-bold font-serif text-center'>Welcome to Super Proctor</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side font-bold font-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="font-bold p-4 text-lg  text-white menu overflow-y-auto w- bg-gradient-to-r from-sky-500 to-sky-800">
                    <button><div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="border-l-accent bg-none">Select Questions</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-blue-500 rounded-box w-52">
                            <li><Link to='/dashboard/mcq'>MCQ</Link></li>
                            <li><Link to='/dashboard/shortQ'>Short Questions</Link></li>
                        </ul>
                    </div></button>
                    <li><Link className='font-bold font-white' to='/dashboard/questions'>Add Questions</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;