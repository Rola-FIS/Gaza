import React from 'react';
import { Carousel } from 'antd';
import CoverStory from "../../assets/images/war12.webp"
import CoverStory2 from "../../assets/images/war11.jpg"

const contentStyle = {
    height: '520px',
    color: '#fff',
    lineHeight: '520px',
    textAlign: 'center',
    background: '#364d79',
};

export default function ContentSlider() {
    return (
        <Carousel autoplay autoplaySpeed={3000} dots>
            <div>
                <div className='flex bg-white '>
                    <div className='p-6 w-80 flex flex-col leading-relaxed justify-center'>
                        <h3 className='font-bold'>
                            Nothing is left: Israel’s military tells Gaza residents to go home but they find only rubble
                        </h3>
                        <p>
                            One man, Abdulfattah Al Bourdaini, said: “We came home and found nothing, no power, no gas, no house, and we cannot change our clothes.”
                            <br />
                            All he had been able to salvage was a teddy bear for the son he hoped one day to have.
                            <br />
                            “I am penniless like the day I was born,” Al Bourdaini said. “I have nothing. I came to check on my house, didn’t find a house or anything, nothing is left… There is nothing left to cry about.”
                        </p>
                    </div>
                    <div className='img-opacity relative flex-1 w-32 items-center rounded-l'>
                        <img
                            src={CoverStory}
                            alt='Background'
                            className='object-cover w-full h-full'
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex bg-white h-[520px]'>
                    <div className='p-6 w-80 flex flex-col leading-relaxed justify-center'>
                        <h3 className='font-bold'>
                            Nothing is left: Israel’s military tells Gaza residents to go home but they find only rubble
                        </h3>
                        <p>
                            One man, Abdulfattah Al Bourdaini, said: “We came home and found nothing, no power, no gas, no house, and we cannot change our clothes.”
                            <br />
                            All he had been able to salvage was a teddy bear for the son he hoped one day to have.
                            <br />
                            “I am penniless like the day I was born,” Al Bourdaini said. “I have nothing. I came to check on my house, didn’t find a house or anything, nothing is left… There is nothing left to cry about.”
                        </p>
                    </div>
                    <div className='img-opacity relative flex-1 w-32 items-center rounded-l'>
                        <img
                            src={CoverStory2}
                            alt='Background'
                            className='object-cover w-full h-full'
                        />
                    </div>
                </div>
            </div>
            {/* Add more slides as needed */}
        </Carousel>
    );
}
