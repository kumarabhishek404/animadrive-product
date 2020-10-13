import "react-slideshow-image/dist/styles.css"

import React from 'react';
import './ImageSlider.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'https://images.pexels.com/photos/457447/pexels-photo-457447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1276235/pexels-photo-1276235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/460223/pexels-photo-460223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <div className="each-slide">
                    <div>
                        <img src={`${slideImages[0]}`} />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={`${slideImages[1]}`} />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={`${slideImages[2]}`} />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;