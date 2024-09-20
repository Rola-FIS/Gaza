import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'; // Include custom CSS for 3D effect

const slides = [
    {
        title: "Slide 1",
        description: "This is the description for slide 1",
        background: "url('../../assets/images/home.jpg')",
    },
    {
        title: "Slide 2",
        description: "This is the description for slide 2",
        background: "url('../../assets/images/home.jpg')",
    },
    {
        title: "Slide 3",
        description: "This is the description for slide 3",
        background: "url('../../assets/images/home.jpg')",
    },
    // Add more slides as needed
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const SliderSection = () => {
    console.log(slides,'slides')
    return (
        <section className="relative h-screen overflow-hidden">
            <Slider {...settings} className="slider">
                {slides.map((slide, index) => (
                    <div key={index} className="slide h-screen" style={{ backgroundImage: slide.background }}>
                        <div className="content-container">
                            <h2 className="slide-title">{slide.title}</h2>
                            <p className="slide-description">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default SliderSection;
