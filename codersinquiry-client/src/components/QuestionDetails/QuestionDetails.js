import React, { useState, useEffect } from 'react';
import './QuestionDetails.css';
import authorImg from '../../images/question_author.jpg';
import Answer from './Answer/Answer';
import { Link, useParams } from 'react-router-dom';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

const QuestionDetails = () => {
    const { _id } = useParams();
    const [question, setQuestion] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${_id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setQuestion(data.leagues[0]));
    }, [_id]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); // react-hook-form
    const onSubmit = (data) => {
        // const newQuestionData = { title: data.title, description: data.description, tags: [ data.tags ], imageURL: [ imageURL ], answer: [ data.answer], vote: 0, answer: 0, views: 0, dateAndTime: new Date(), userInfo: loggedInUser };
        // console.log(newQuestionData);
        // fetch('http://localhost:5000/addQuestion', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(newQuestionData)
        // })
        // .then(response => { if (response) alert('Question added successfully') })
    };
    const { title, description, tags, } = question;
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label for='writeArticleDescription' className='form-label'>
                        উত্তর প্রদান করুন
                    </label>
                    <textarea className='form-control' id='writeArticleDescription' rows='3' placeholder='আপনার উত্তর প্রদান করুন' {...register('description', { required: true })}></textarea>
                    {/* {errors.description && <span className='text-danger'>প্রবন্ধের বিস্তারিত অংশ আবশ্যক</span>} */}
                </div>
                <button type='submit' class='btn writeArticle__btn'>
                    Answer
                </button>
            </form>
        </div>
    );
};

export default QuestionDetails;
