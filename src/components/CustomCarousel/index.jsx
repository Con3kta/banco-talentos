import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

export default function CustomCarousel({ children, slide0, slide1, slide2, slide3 }) {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        children ?
            <Slider {...settings} className='slider-container'>
                { children }
            </Slider>
            :
            <Slider {...settings} className='slider-container'>
                {slide0}{slide1}{slide2}{slide3}
            </Slider>
    );
}