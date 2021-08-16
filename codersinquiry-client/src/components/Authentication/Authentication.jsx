import React from 'react';
import './Authentication.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import SignUpImg from '../../images/SignUpImg.png';
import Footer from '../Footer/Footer';

const Authentication = () => {
    return (
        <div className='authentication'>
            <div className='container'>
                <div className='row d-flex align-items-center justify-content-center my-5'>
                    <div className='col-md-7'>
                        <img src={SignUpImg} alt='SignUpImg' />
                    </div>
                    <div className='col-md-5'>
                        <div className='card p-3'>
                            <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                                <li class='nav-item w-50' role='presentation'>
                                    <button class='nav-link active form-control shadow-none' id='pills-signUp-tab' data-bs-toggle='pill' data-bs-target='#pills-signUp' type='button' role='tab' aria-controls='pills-signUp' aria-selected='true'>
                                        Sign Up
                                    </button>
                                </li>
                                <li class='nav-item w-50' role='presentation'>
                                    <button class='nav-link form-control shadow-none' id='pills-signIn-tab' data-bs-toggle='pill' data-bs-target='#pills-signIn' type='button' role='tab' aria-controls='pills-signIn' aria-selected='false'>
                                        Sign In
                                    </button>
                                </li>
                            </ul>
                            <div class='tab-content' id='pills-tabContent'>
                                <div class='tab-pane fade show active' id='pills-signUp' role='tabpanel' aria-labelledby='pills-signUp-tab'>
                                    <SignUp />
                                </div>
                                <div class='tab-pane fade' id='pills-signIn' role='tabpanel' aria-labelledby='pills-signIn-tab'>
                                    <SignIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Authentication;
