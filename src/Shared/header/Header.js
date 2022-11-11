import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './header.css'


const Header = () => {
    const { user, singOut } = useContext(AuthContext)
    const handlesingOut = () => {
        singOut()
    }
    const lgmenu = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to="/blog" className='mr-2 font-semibold'>Blog</Link></li>
        <li><Link className='font-semibold'>About us</Link></li>
        <div>
            {user?.uid ?
                <div className='flex'>
                    <li><Link className='font-semibold'>My reviews</Link></li>
                    <li><Link className='font-semibold'>Add service</Link></li>
                    <Link><button onClick={handlesingOut} className="btn btn-outline btn-accent">Logout</button></Link>
                </div>
                :
                <Link to='/login'><button className="invisible px-5 py-1 btn btn-outline btn-info lg:visible">Login</button></Link>
            }
        </div>


    </>
    const smmenu = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link className='font-semibold'>Contact</Link></li>
        <li><Link className='font-semibold'>About us</Link></li>
        <li><Link className='mr-2 font-semibold'>Services</Link></li>
        <li><Link to="/blog" className='mr-2 font-semibold'>Blog</Link></li>
        {
            user?.uid ?
                <li><Link className='font-semibold'>My reviews</Link>
                    <Link className='font-semibold'>Add service</Link>
                    <button onClick={handlesingOut}> <Link className='mr-2 font-semibold'>Sign out</Link></button>
                </li> :
                <li><Link to='/login' className='mr-2 font-semibold'>Login</Link>
                    <Link to='/regi' className='mr-2 font-semibold'>Sign up</Link>
                </li>

        }
    </>

    return (
        <div>
            <div className='mt-5 text-2xl font-bold text-center lg:hidden'>
                <h2>Photography <span>Lover</span></h2>
            </div>
            <div className="h-20 navbar mb-7">
                <div className="navbar-start">
                    <div className="dropdown">

                        <label tabIndex={0} className="btn btn-info lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="h-auto p-2 mt-3 small-nav menu menu-compact dropdown-content rounded-box w-52">
                            {smmenu}

                            <li tabIndex={0}>
                            </li>

                        </ul>

                    </div>


                </div>
                <div className="hidden navbar-center lg:flex">
                    <h2 className='mr-20 text-3xl font-bold'>Photography-<span className='font-serif text-blue-700'>L</span>over</h2>
                    <ul className="p-0 menu menu-horizontal large-nav">

                        {lgmenu}

                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="hidden btn btn-outline btn-info lg:visible">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;