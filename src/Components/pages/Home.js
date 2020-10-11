import React, { useState, useEffect, useRef } from 'react'
import './Home.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Header from '../Header';
import About from '../About';
import Vision from '../Vision';
import OurProducts from '../OurProducts';
import Impact from '../Impact';

const images = [
    'https://m.media-amazon.com/images/I/41+fXlXMPyL._SR500,500_.jpg',
    'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg'
]

function Home() {
    const targetSrc = useRef()
    const [imageIndex, setImageIndex] = useState(0)


    // const handleImageSrc = (e) => {
    //     if (imageIndex < images.length) {
    //         targetSrc.current.src = images[imageIndex]
    //         setImageIndex(prevState => prevState + 1)
    //     }
    //     else {
    //         setImageIndex(0)
    //     }
    // }

    return (
        <>
            <div className='home'>
                <div className='home_container'>
                    <div className='home_wrapper'>
                            <Header />
                            <About />
                            <Vision />
                            <OurProducts />
                            <Impact />
                        <div className='all_products'>
                            <div className='single_product'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
