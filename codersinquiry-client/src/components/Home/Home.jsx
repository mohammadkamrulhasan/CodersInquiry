import React from 'react';
import './Home.css';
import Options from '../Options/Options';
import Questions from '../Questions/Questions';
import QAPieChart from '../QAPieChart/QAPieChart';
import TopVotedQuestion from '../TopVotedQuestion/TopVotedQuestion';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Quotes from '../Quotes/Quotes';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Banner />
            <div className='container my-3'>
                <Options />
                <div className='row'>
                    <div className='col-md-9'>
                        {/* <Main /> */}
                        <Questions />
                    </div>
                    <div className='col-md-3'>
                        <QAPieChart />
                        <TopVotedQuestion />
                    </div>
                </div>
                <Quotes />
            </div>
        </div>
    );
};

export default Home;
