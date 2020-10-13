import React, { useState, useEffect, useRef } from 'react'
import './Home.css';
import Header from '../Header'
import About from '../About'
import Vision from '../Vision';
import OurProduct from '../OurProducts'
import ImageSlider from './ImageSlider'
import HomeSection from './HomeSection'
import Impact from '../Impact'
import { logAction } from '../../Redux';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const images = [
    'https://m.media-amazon.com/images/I/41+fXlXMPyL._SR500,500_.jpg',
    'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg'
]

function Home() {
    const targetSrc = useRef()
    const [imageIndex, setImageIndex] = useState(0)


    return (
        <>
            <div className='home'>
                <div className='home_container'>
                    <ImageSlider />
                    {/* <h1>About Us</h1> */}
                    <HomeSection headline='About Us' dottedLine='dottedLine'>Homeless steers are a major and genuine challenge.Around 8 million lost steers are meandering Streets. They influence the cultivating, decimate the yields and fields. They become a reason for many accidents on the streets. The farmers use their cattles for thier own personal benefits. The moment they stop producing milk, they leave them. We're using the waste of Non Dairy cattles to develop our product and that product is helping the indoor plants.</HomeSection>
                    {/* <h1>Our Products</h1> */}
                    <OurProduct />
                    {/* <h1>Vision</h1> */}
                    <HomeSection headline='Vision'>Our mission is to preserve flora and fauna.
                    The preservation of flora and fauna is significant for people too. An even biological system filters the climate, giving us clean air to inhale, a solid water framework to help different marine life, and arable land for agricultural production.It likewise furnishes us with remarkable plants with medicinal properties, which fill in as the establishment of our medicines. At the point when environments fizzle, our own wellbeing is in danger.</HomeSection>
                    {/* <h1>Impact</h1> */}
                    <HomeSection headline='Impact' background='white'>There are around 192 million stray cattles in India. There are more than a crore stray cattle while there is shelter and food for not even 10 per cent of these animals — and no resources for this purpose. In the Delhi-NCR region, more than 200 cows and bulls die every year due to lack of such resources. Our purpose is to save or preserve these stray and dairy cattles as much as possible. We are also teaching new art to women residing in rural areas called " Waste to art." which also provides employment to rural women. Nonetheless, with regards to plants, wreck isn't the main expected disaster, plants can be toxic and a peril to your kids whenever ingested. To solve that we are also giving a non toxic plant food to plant parents.</HomeSection>
                    {/* <Header /> */}
                    {/* <About /> */}
                    {/* <Vision /> */}
                    {/* <Impact /> */}
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}

                </div>
            </div>
        </>
    )
}

export default Home
