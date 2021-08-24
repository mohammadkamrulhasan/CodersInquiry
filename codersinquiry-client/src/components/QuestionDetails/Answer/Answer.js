import React from 'react';
import './Answer.css';
import authorImg from '../../../images/question_author.jpg';
import { Link } from 'react-router-dom';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

const Answer = () => {
    return (
        <div className='answer'>
            <div className='col-sm-1'>
                <div className='questionDetails__questionVote'>
                    <BsCaretUpFill className='question__upVoteIcon' />
                    <p className='questionDetails__questionVoteCount'>11635</p>
                    <BsCaretDownFill className='question__downVoteIcon' />
                </div>
            </div>
            <div className='answer__details'>
                <p>আপনি যেকোন প্রোগ্রামিং ল্যাঙ্গুয়েজ দিয়েই প্রোগ্রামিং শেখা শুরু করতে পারেন। তবে প্রথমে যে ভাষাটি দিয়ে শেখা শুরু করবেন। সেই ভাষা যেন আপনার কাছে সহজবোধ্য হয়। নতুবা আপনি শিখতে গিয়ে হোঁচট খেতে পারেন। এক্ষেত্রে আপনি পাইথন প্রোগ্রামিং ল্যাঙ্গুয়েজ দিয়ে শুরু করতে পারেন।</p>
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
    );
};

export default Answer;
