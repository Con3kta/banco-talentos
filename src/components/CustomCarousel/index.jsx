import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

export default function CustomCarousel({ slide1, slide2, slide3 }) {
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
        <Slider {...settings} className='slider-container'>
            {slide1}{slide2}{slide3}
        </Slider>
    );
}