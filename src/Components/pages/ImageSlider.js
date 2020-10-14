import "react-slideshow-image/dist/styles.css"

import React from 'react';
import './ImageSlider.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    { image: 'https://images.pexels.com/photos/457447/pexels-photo-457447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { image: 'https://images.pexels.com/photos/1276235/pexels-photo-1276235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { image: 'https://images.pexels.com/photos/460223/pexels-photo-460223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
];

const slideText = [
    { text: 'Our initiative for animal safety is working towards animal protection and awareness. According to the Health and Family Welfare ministry and WHO, it is impossible for the Corona Virus to get transmitted from animals to' },
    { text: 'Our initiative for animal safety is working towards animal protection and awareness. According to the Health and Family Welfare ministry and WHO, it is impossible for the Corona Virus to get transmitted from animals to' },
    { text: 'Our initiative for animal safety is working towards animal protection and awareness. According to the Health and Family Welfare ministry and WHO, it is impossible for the Corona Virus to get transmitted from animals to' }

];

const Slideshow = ({ small, textSlide }) => {

    return (
        <div className={small ? "slide-container_small" : 'slide_container'}>
            { textSlide ? <Slide>
                {slideText.map(item =>
                    <div className="each-slide_text">
                        <div>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
                }
            </Slide>
                : <Slide>
                    {slideImages.map(item =>
                        <div className="each-slide">
                            <div>
                                <img src={item.image} />
                            </div>
                        </div>
                    )
                    }
                </Slide>
            }
        </div >
    )
}

export default Slideshow;