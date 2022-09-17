import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';


// import auth from '../firebase.init';


const Dashboard = () => {
    // const [user] = useAuthState(auth)


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-2xl text-pink-900 font-bold font-serif text-center'>Welcome to My Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side font-bold font-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="font-bold p-4 text-xl  text-white menu overflow-y-auto w-52 bg-gradient-to-r from-blue-400 to-green-500">
                    <li><Link className='font-bold font-white' to='/dashboard/addQ'>Add Questions</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;