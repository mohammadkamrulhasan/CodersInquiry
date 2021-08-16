import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {BiUserCircle} from 'react-icons/bi';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light sticky-top'>
            <div className='navbar__content container'>
                <Link className='navbar-brand' to='/'>
                    <span className='navbar__brandText'>Reduce Fluffy</span>
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar__list collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <Link to='/questions' className='nav-item'>
                            <li className='nav-link'>
                                Questions
                            </li>
                        </Link>
                        <Link to='/tags' className='nav-item'>
                            <li className='nav-link'>
                                Tags
                            </li>
                        </Link>
                        <Link to='/dashBoard' className='nav-item'>
                            <li className='nav-link'>
                                Dashboard
                            </li>
                        </Link>
                        <Link className='nav-item'>
                            <li to='/' className='nav-link'>
                                Articles
                            </li>
                        </Link>
                        <Link className='nav-item'>
                            <li to='/topLearners' className='nav-link'>
                                Leaderboard
                            </li>
                        </Link>
                        <Link to='/login' className='nav-item'>
                            <li className='nav-link'>
                                Login
                            </li>
                        </Link>
                        <Link to='/register' className='nav-item'>
                            <li className='nav-link'>
                                Register
                            </li>
                        </Link>
                        <Link to='/user/profile' className='nav-item'>
                            <li className='nav-link'>
                                <BiUserCircle />
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
