import React from 'react';
import './QuestionDetails.css';
import authorImg from '../../images/question_author.jpg';
import Answer from './Answer/Answer';
import { Link } from 'react-router-dom';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

const QuestionDetails = () => {
    return (
        <div className='questionDetails container mt-3'>
            <div className='questionDetails__questionInfo d-flex'>
                <div className='col-sm-1'>
                    <div className='questionDetails__questionVote'>
                        <BsCaretUpFill className='question__upVoteIcon' />
                        <p className='questionDetails__questionVoteCount'>11635</p>
                        <BsCaretDownFill className='question__downVoteIcon' />
                    </div>
                </div>
                <div className='col-sm-11'>
                    <h4 className='questionDetails__questionHead'>কোন প্রোগ্রামিং ভাষা দিয়ে প্রোগ্রামিং শুরু করা উচিত?</h4>
                    <hr />
                    <p className='questionDetails__questionBody'>আমি নবম শ্রেণির ছাত্র। আমি প্রোগ্রামিং শিখতে চাই। প্রথমে কোন ভাষা দিয়ে প্রোগ্রামিং শেখা শুরু করা উচিত? আমি নবম শ্রেণির ছাত্র। আমি প্রোগ্রামিং শিখতে চাই। প্রথমে কোন ভাষা দিয়ে প্রোগ্রামিং শেখা শুরু করা উচিত? আমি নবম শ্রেণির ছাত্র। আমি প্রোগ্রামিং শিখতে চাই। প্রথমে কোন ভাষা দিয়ে প্রোগ্রামিং শেখা শুরু করা উচিত?</p>
                    <div className='questionDetails__questionTags'>
                        <ul>
                            <li>Beginner</li>
                            <li>starter</li>
                            <li>language</li>
                        </ul>
                    </div>
                    <div className='question__user'>
                        <div className='question__userAbout'>
                            <Link to='/' className='question__userName'>
                                Monsur Alam Rana
                            </Link>
                            <p className='question__askingTime'>31 July 2021, 4:56 PM</p>
                        </div>
                        <Link to='/'>
                            <img src={authorImg} alt='user_profile_img' className='question__userImg' />
                        </Link>
                    </div>
                </div>
            </div>
            <h5 className='fw-bold my-3'>৪টি উত্তর</h5>
            <Answer />
            <Answer />
            <Answer />
        </div>
    );
};

export default QuestionDetails;
