import React from 'react';
import './Quotes.css';
import quotesData from '../../Data/Quotes.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import { useState } from 'react';
import { useEffect } from 'react';
SwiperCore.use([Autoplay, Pagination]);

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        setQuotes(quotesData);
    }, []);

    return (
        <div className='quotes'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {quotes.map((quote) => (
                    <SwiperSlide>
                        <div className="quotes__quote">
                            <p>{quote.quote}</p>
                            <h5>{quote.name}</h5>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Quotes;
