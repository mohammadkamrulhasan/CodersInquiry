import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
// import ReCAPTCHA from "react-google-recaptcha";
// import WriteArticleImage from '../../images/write_article1.png';
import './WriteArticle.css';

const WriteArticle = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm(); // react-hook-form
    const [imageURL, setImageURL] = useState(null);
    const handleUploadFile = event => {
        const imageData = new FormData();
        imageData.set('key', 'a2eee1479c4be326718537942be70d23');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => setImageURL(response.data.data.display_url))
            .catch(error => console.log(error));
    }
    const onSubmit = data => {
        const newQuestionData = { title: data.title, description: data.description, tags: [ data.tags ], imageURL: [ imageURL ], answer: [ data.answer], vote: 0, answer: 0, views: 0, dateAndTime: new Date(), userInfo: loggedInUser };
        console.log(newQuestionData);
        fetch('http://localhost:5000/addArticle', {
            method: 'POST', 
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newQuestionData)
        })
        .then(response => { if (response) alert('Article posted successfully') })
    };
    return (
        <div className='writeArticle'>
            <Navbar />
            <div className='container'>
                <h2 className='writeArticle__head fw-bold my-3'>Write an Article</h2>
                <div className='row my-3'>
                    <div className='col-md-9 mb-3'>
                        <form onSubmit={handleSubmit(onSubmit)} className='card p-3'>
                            <div className='mb-3'>
                                <label for='writeArticleTitle' className='form-label'>
                                    শিরোনাম
                                </label>
                                <input type='text' className='form-control' id='writeArticleTitle' placeholder='প্রবন্ধের শিরোনাম লিখুন...' {...register('title', { required: true })} />
                                {errors.title && <span className='text-danger'>প্রবন্ধের শিরোনাম আবশ্যক</span>}
                            </div>
                            <div className='mb-3'>
                                <label for='writeArticleDescription' className='form-label'>
                                    বিস্তারিত
                                </label>
                                <textarea className='form-control' id='writeArticleDescription' rows='3' placeholder='প্রবন্ধ লিখুন...' {...register('description', { required: true })}></textarea>
                                {errors.description && <span className='text-danger'>প্রবন্ধের বিস্তারিত অংশ আবশ্যক</span>}
                            </div>
                            <div class='mb-3'>
                                <label for='writeArticleImg' class='form-label'>
                                    ছবি/স্ক্রিনশট যুক্ত করুন
                                </label>
                                <input class='form-control' type='file' id='writeArticleImg' multiple />
                            </div>
                            <div className='mb-3'>
                                <label for='writeArticleTags' className='form-label'>
                                    ট্যাগ
                                </label>
                                <input type='text' className='form-control' id='writeArticleTags' placeholder='প্রবন্ধের ট্যাগ যুক্ত করুন...' {...register('tags', { required: true })} />
                                {errors.tags && <span className='text-danger'>প্রবন্ধের ট্যাগ যুক্ত করা আবশ্যক</span>}
                            </div>
                            <button type='submit' class='btn writeArticle__btn'>
                                Publish your Article
                            </button>
                        </form>
                    </div>
                    <div className='col-md-3 mb-3'>
                        <div className='card p-3'>
                            <h4>কীভাবে একটি সুন্দর আর্টিকেল লেখা যায়?</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WriteArticle;
