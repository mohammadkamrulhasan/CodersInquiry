import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
// import ReCAPTCHA from "react-google-recaptcha";
// import WriteArticleImage from '../../images/write_article1.png';
import './WriteArticle.css';

const WriteArticle = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    function onChange(value) {
        console.log('Captcha value:', value);
    }

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
