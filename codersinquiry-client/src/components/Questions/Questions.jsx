import React from 'react';
import './Questions.css';
import { Link } from 'react-router-dom';
import Question from './Question/Question';

const Questions = () => {
    return (
        <div className='questions mb-3'>
            <div className='d-flex justify-content-between my-3'>
                <h2 className='fw-bold'>Q&A Discussion</h2>
                <Link to='/askQuestion'>
                    <button className='questions__btn btn'>Ask Question</button>
                </Link>
            </div>

            <div className='questions__filter'>
                <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                    <li class='nav-item' role='presentation'>
                        <button class='nav-link active' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#pills-home' type='button' role='tab' aria-controls='pills-home' aria-selected='true'>
                            Trending
                        </button>
                    </li>
                    <li class='nav-item' role='presentation'>
                        <button class='nav-link' id='pills-profile-tab' data-bs-toggle='pill' data-bs-target='#pills-profile' type='button' role='tab' aria-controls='pills-profile' aria-selected='false'>
                            Most Recent
                        </button>
                    </li>
                    <li class='nav-item' role='presentation'>
                        <button class='nav-link' id='pills-contact-tab' data-bs-toggle='pill' data-bs-target='#pills-contact' type='button' role='tab' aria-controls='pills-contact' aria-selected='false'>
                            Unanswered
                        </button>
                    </li>
                </ul>
                <div class='tab-content' id='pills-tabContent'>
                    <div class='tab-pane fade show active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>
                        Trending
                    </div>
                    <div class='tab-pane fade' id='pills-profile' role='tabpanel' aria-labelledby='pills-profile-tab'>
                        Most Recent
                    </div>
                    <div class='tab-pane fade' id='pills-contact' role='tabpanel' aria-labelledby='pills-contact-tab'>
                        Unanswered
                    </div>
                </div>
            </div>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
    );
};

export default Questions;
