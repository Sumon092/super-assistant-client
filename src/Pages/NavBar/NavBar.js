import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.Init';
import './NavBar.css'


const NavBar = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    const [navBar, setNavBar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navBar ? 'navBar active z-50' : 'navBar z-50'}>
            <div className="text-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/home'>HOME</Link></li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between items-center h-14 w-screen">
                <div>
                    <h2 className='text-2xl font-bold text-white ml-12 font-sans'>Super Proctor</h2>
                </div>
                <div className='text-end font-bold mr-12'>
                   
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-white ml-7' : 'text-white ml-5'}>Home</NavLink>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-white ml-7' : 'white ml-5'}>Pricing</NavLink>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-white ml-7' : 'white ml-5'}>FAQs</NavLink>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-white ml-7' : 'white ml-5'}>Dashboard</NavLink>

                    {
                        user ? <button onClick={handleSignOut} className=" text-center border-0 text-white ml-7" >Sign out</button> :

                            <Link className='text-white mt-3 ml-7' to="/googleSignIn">
                                Sign In
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;