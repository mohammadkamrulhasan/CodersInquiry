import React, { useState, useEffect } from 'react';
import './QuestionDetails.css';
import Answer from './Answer/Answer';
import { Link, useParams } from 'react-router-dom';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

const QuestionDetails = () => {
    const { _id } = useParams();
    const [question, setQuestion] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { title, description, iamges, tags, answers, dateAndTime, userInfo } = question;
    useEffect(() => {
        const url = 'http://localhost:5000/questions';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const questionDetails = data.filter((question) => _id == question._id);
                setQuestion(questionDetails[0]);
            });
    }, [_id]);
    const onSubmit = (data) => {
        console.log(data);
        // add answer to the answer list
        const answers = question.answers;
        const newAnswers = answers.concat([data.answer]);
        const newQuestion = {
            ...question,
            answers: newAnswers,
        };
        const url = `http://localhost:5000/addAnswer/${_id}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newQuestion),
        }).then((response) => {
            if (response) alert('Answer added successfully');
        });
    };
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
                    <h4 className='questionDetails__questionHead'>{title}</h4>
                    <hr />
                    <p className='questionDetails__questionBody'>{description}</p>
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
                                {userInfo?.name}
                            </Link>
                            <p className='question__askingTime'>{dateAndTime}</p>
                        </div>
                        <Link to='/'>
                            <img src={userInfo?.photo} alt='user_profile_img' className='question__userImg' />
                        </Link>
                    </div>
                </div>
            </div>
            <h5 className='fw-bold my-3'>৪টি উত্তর</h5>
            <Answer />
            <Answer />
            <Answer />
            <form onSubmit={handleSubmit(onSubmit)} className='givenAnswer my-3'>
                <div className='mb-3'>
                    <label for='inputAnswer' className='form-label'>
                        উত্তর প্রদান করুন
                    </label>
                    <textarea className='form-control' id='inputAnswer' rows='3' placeholder='আপনার উত্তর প্রদান করুন' {...register('answer', { required: true })}></textarea>
                </div>
                <button type='submit' class='btn givenAnswer__btn'>
                    Post your Answer
                </button>
            </form>
        </div>
    );
};

export default QuestionDetails;
