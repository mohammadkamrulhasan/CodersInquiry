import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import { FaFacebookF, FaTwitter, FaRedditAlien, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container pt-5 pb-3'>
                <div className='row'>
                    <div className='footer__col col-md-6 my-3'>
                        <h3 className='footer__colHeading mb-3'>Reduce Fluffy</h3>
                        <p className='pe-5 mb-3'>Reduce Fluffy একটি প্রোগ্রামিং বিষয়ক প্রশ্ন-উত্তর ওয়েবসাইট। প্রোগ্রামিং জগতে যারা নতুন প্রবেশ করছে এবং যারা এই জগতে ইতোমধ্যেই ঘুরাঘুরি করছে তারা যেন শিখতে গিয়ে কিংবা কাজ করতে গিয়ে সমস্যায় পড়ে হতাশ হয়ে প্রোগ্রামিং ছেড়ে না দেয়। বরং কোন এক জায়গায় জিজ্ঞাসা করে সমাধান পেতে পারে সেজন্যই আমরা এই মঞ্চটি তৈরি করেছি।</p>
                        <div className='footer__socialIcons'>
                            <a href='#' target='_blank' rel='norefferer noopener'>
                                <CgMail className='footer__socialIcon' />
                            </a>
                            <a href='#'>
                                <FaFacebookF className='footer__socialIcon' />
                            </a>
                            <a href='#'>
                                <FaTwitter className='footer__socialIcon' />
                            </a>
                            <a href='#'>
                                <FaRedditAlien className='footer__socialIcon' />
                            </a>
                            <a href='#'>
                                <FaYoutube className='footer__socialIcon' />
                            </a>
                        </div>
                    </div>
                    <div className='footer__col col-md-3 my-3'>
                        <h6 className='footer__colHeading'>What you can do</h6>
                        <ul className='footer__colList'>
                            <li>
                                <Link to='/' className='footer__colListItem'>
                                    Find Solution
                                </Link>
                            </li>
                            <li>
                                <Link to='/' className='footer__colListItem'>
                                    Ask Question
                                </Link>
                            </li>
                            <li>
                                <Link to='/' className='footer__colListItem'>
                                    Write Article
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__col col-md-3 my-3'>
                        <h6 className='footer__colHeading'>Developers</h6>
                        <ul>
                            <li>
                                <a href='#' target='_blank' rel='norefferer noopener' className='footer__colListItem'>
                                    Nayemul Hasan Saheb
                                </a>
                            </li>
                            <li>
                                <a href='#' className='footer__colListItem'>
                                    Nurul Absar
                                </a>
                            </li>
                            <li>
                                <a href='#' className='footer__colListItem'>
                                    Monsur Alam Rana
                                </a>
                            </li>
                            <li>
                                <a href='#' className='footer__colListItem'>
                                    Mohammad Kamrul Hasan
                                </a>
                            </li>
                            <li>
                                <a href='#' className='footer__colListItem'>
                                    Mustaque Nadim
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='footer__copyright pt-4'>
                    &copy; {new Date().getFullYear()} All rights reserved by <Link to='/developers'>Endgame Heroes</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
