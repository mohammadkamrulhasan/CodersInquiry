import React, { useState, useContext } from 'react';
import './AskQuestion.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { UserContext } from '../../App';

const AskQuestion = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext); // context-api
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); // react-hook-form
    const [imageURL, setImageURL] = useState(null); // state for upload image

    // upload image -> imgbb
    const handleUploadFile = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'a2eee1479c4be326718537942be70d23');
        imageData.append('image', event.target.files[0]);
        axios
            .post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => setImageURL(response.data.data.display_url))
            .catch((error) => console.log(error));
    };

    // onSubmit function -> react-hook-form
    const onSubmit = (data) => {
        const newQuestionData = { title: data.title, description: data.description, tags: [data.tags], imageURL: [imageURL], votes: 0, views: 0, dateAndTime: new Date(), userInfo: loggedInUser };
        console.log(newQuestionData);
        fetch('https://fierce-hollows-24915.herokuapp.com/addQuestion', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newQuestionData),
        }).then((response) => {
            if (response) alert('Question added successfully');
        });
    };

    return (
        <div className='askQuestion'>
            <Navbar />
            <div className='container'>
                <h2 className='askQuestion__head fw-bold my-3' data-testid='question'>
                    Ask a Question
                </h2>
                <div className='row my-3'>
                    <div className='col-md-9 mb-3'>
                        {/* ask question form */}
                        <form onSubmit={handleSubmit(onSubmit)} className='card p-3'>
                            <div className='mb-3'>
                                <label for='askQuestionTitle' className='form-label'>
                                    শিরোনাম
                                </label>
                                <input type='text' className='form-control' id='askQuestionTitle' placeholder='প্রশ্ন/সমস্যার শিরোনাম লিখুন...' {...register('title', { required: true })} />
                                {errors.title && <span className='text-danger'>প্রশ্ন/সমস্যার শিরোনাম আবশ্যক</span>}
                            </div>
                            <div className='mb-3'>
                                <label for='askQuestionDescription' className='form-label'>
                                    বিস্তারিত
                                </label>
                                <textarea className='form-control' id='askQuestionDescription' rows='3' placeholder='প্রশ্ন/সমস্যার বিস্তারিত লিখুন...' {...register('description', { required: true })}></textarea>
                                {errors.description && <span className='text-danger'>প্রশ্ন/সমস্যার বিস্তারিত অংশ আবশ্যক</span>}
                            </div>
                            <div class='mb-3'>
                                <label for='askQuestionImg' class='form-label'>
                                    ছবি/স্ক্রিনশট যুক্ত করুন
                                </label>
                                <input class='form-control' type='file' id='askQuestionImg' name='askQuestionImg' {...register('askQuestionImg')} onChange={handleUploadFile} multiple />
                            </div>
                            <div className='mb-3'>
                                <label for='askQuestionTags' className='form-label'>
                                    ট্যাগ
                                </label>
                                <input type='text' className='form-control' name='tags' id='askQuestionTags' placeholder='প্রশ্ন/সমস্যার ট্যাগ যুক্ত করুন...' {...register('tags', { required: true })} />
                                {errors.tags && <span className='text-danger'>প্রশ্ন/সমস্যার ট্যাগ যুক্ত করা আবশ্যক</span>}
                            </div>
                            <button type='submit' class='btn askQuestion__btn'>
                                Post your Question
                            </button>
                        </form>
                        {/* end ask question form */}
                    </div>
                    <div className='col-md-3 mb-3'>
                        <div className='card p-3'>
                            <h5>প্রশ্ন করার নিয়মাবলী</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AskQuestion;
