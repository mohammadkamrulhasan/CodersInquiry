import React from 'react';
import './Question.css';
import { Link } from 'react-router-dom';
import userImg from '../../../images/userImg.jpg';

const Question = () => {
    return (
        <div className='question'>
            <div className='question__row row'>
                {/* <div className='question__col col-md-1'>
                    <div className='question__card'>
                        <BsCaretUpFill className='question__cardIcon' />
                        <BsCaretDownFill className='question__cardIcon' />
                    </div>
                </div> */}
                <div className='question__col col-md-1'>
                    <div className='question__card text-center'>
                        <p className='question__cardText'>
                            <span className='question__voteCount'>134</span> <br /> votes
                        </p>
                    </div>
                </div>
                <div className='question__col col-md-1'>
                    <div className='question__card text-center'>
                        <p className='question__cardText'>
                            <span className='question__ansCount'>18</span> <br /> answers
                        </p>
                    </div>
                </div>
                <div className='question__col col-md-1'>
                    <div className='question__card text-center'>
                        <p className='question__cardText'>
                            <span className='question__viewsCount'>256</span> <br /> views
                        </p>
                    </div>
                </div>
                <div className='question__col col-md-9'>
                    <div className='question__card'>
                        <Link to='/questionDetails' className='question__question'>আমি প্রোগ্রামিং শিখতে চাই। প্রথমে কোন ল্যাঙ্গুয়েজ দিয়ে শুরু করা উচিত?</Link>
                        <div className="question__tags">
                            <ul>
                                <li>Beginner</li>
                                <li>starter</li>
                                <li>language</li>
                            </ul>
                        </div>
                        <div className="question__user">
                            <div className='question__userAbout'>
                                <Link to='/' className='question__userName'>Mustaque Nadim</Link>
                                <p className='question__askingTime'>31 July 2021, 4:56 PM</p>
                            </div>
                            <Link to='/'><img src={userImg} alt="user_profile_img" className="question__userImg" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
