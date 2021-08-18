import React, { useState } from 'react';
import './AskQuestion.css';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import ReCAPTCHA from "react-google-recaptcha";
const AskQuestion = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // base 64
    const [file, setFile] = useState("")
    let base64String = "";
    function handleFileChange() {
        var file = document.querySelector(
            'input[type=file]')['files'][0];
      
        var reader = new FileReader();
        console.log("next");
          
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            // console.log(base64String);
            setFile(base64String);
        }
        reader.readAsDataURL(file);
    }
    const onSubmit = (data) => {
        const {title, description, tags} = data;
        const newQuestionData = {
            title,
            description,
            tags,
            // file,
        }
        fetch('https://fierce-hollows-24915.herokuapp.com/addQuestion',{
          method:'POST',
          headers: { 
            "Content-Type": "application/json",
            'Accept': 'application/json, text/plain, */*',
          },
          body: JSON.stringify(newQuestionData)
        })
        .then(res => res.json())
        .then(success =>{
            console.log(success);
            alert("successfully entry");
        })
        console.log(newQuestionData);
    };

    // const onChange = (value) => {
    //     console.log("Captcha value:", value);
    //   }
    return (
        <div className='askQuestion'>
            <Navbar />
            <div className='container'>
                <h2 className='askQuestion__head fw-bold my-3' data-testid="question">Ask a Question</h2>
                <div className='row my-3'>
                    <div className='col-md-9 mb-3'>
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
                                <input class='form-control' type='file' id='askQuestionImg' name="askQuestionImg" {...register("askQuestionImg")} onChange={handleFileChange} multiple />
                            </div>
                            <div className='mb-3'>
                                <label for='askQuestionTags' className='form-label'>
                                    ট্যাগ
                                </label>
                                <input type='text' className='form-control' name="tags" id='askQuestionTags' placeholder='প্রশ্ন/সমস্যার ট্যাগ যুক্ত করুন...' {...register('tags', { required: true })} />
                                {errors.tags && <span className='text-danger'>প্রশ্ন/সমস্যার ট্যাগ যুক্ত করা আবশ্যক</span>}
                            </div>
                            {/* <ReCAPTCHA
                             sitekey=""
                              onChange={onChange}
                             />, */}
                            <button type="submit" class="btn askQuestion__btn">Post your Question</button>
                        </form>
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
