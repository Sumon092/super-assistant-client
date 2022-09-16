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
        <div className={navBar ? 'navBar active' : 'navBar'}>
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

            <div className="text-left">
                <ul className="text-left menu menu-horizontal p-0 font-bold">
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-white ml-5' : 'white ml-5'}>Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-white ml-5' : 'white ml-5'}>FAQs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-white ml-5' : 'white ml-5'}>Home</NavLink>
                    </li>

                    {
                        user ? <button onClick={handleSignOut} className=" text-center border-0 text-white ml-3" >Sign out</button> :

                            <Link className='text-white mt-3 ml-3' to="/googleSignIn">
                                Sign In
                            </Link>

                    }



                </ul>
            </div>
        </div>
    );
};

export default NavBar;