import React, { useState, useEffect, useRef } from 'react'
import './Home.css'
import Header from '../Header';
import About from '../About'
import Vision from '../Vision';
import OurProduct from '../OurProducts'
import Impact from '../Impact'
import { logAction } from '../../Redux'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const images = [
    'https://m.media-amazon.com/images/I/41+fXlXMPyL._SR500,500_.jpg',
    'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg'
]

function Home(props) {
    const targetSrc = useRef()
    const [imageIndex, setImageIndex] = useState(0)
    const [login, setLogin] = useState(false)



    return (
        <>
            <div className='home'>
                <div className='home_container'>
                    {/* <div className='home_wrapper'> */}
                    {/* <div className='all_products'> */}
                    {/* <div className='single_product'> */}
                    <Header />
                    <About />
                    <Vision />
                    <OurProduct />
                    <Impact />
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Home
