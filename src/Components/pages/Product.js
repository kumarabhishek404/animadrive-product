import React, { useState, useEffect, useRef } from 'react'
import './Shop.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '../Button'
import InstagramIcon from '@material-ui/icons/Instagram';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';


function Product() {
    const [selectedImage, setSelectedImage] = useState('/Images/1.png')
    // const [slideImage, setSlideImage] = useState(false)

    const slideImage = useRef()
    const clickLoadImage = (e) => {
        setSelectedImage(e.target.src)
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='products'>
            <div className='product_container'>
                <div className='product_image'>
                    <div className='product_detail_heading'>
                        <h1>Green Gud</h1>
                    </div>
                    <div className='product_image_container'>
                        <div className='product_main_image'>
                            <img src={selectedImage} alt='Image' />
                        </div>
                        <div className='product_image_side'>
                            <img src='/Images/1.png' alt='Image' onMouseEnter={clickLoadImage} />
                            <img src='/Images/2.png' onMouseEnter={clickLoadImage} />
                            <img src='Images/3.png' alt='Image' onMouseEnter={clickLoadImage} />
                        </div>
                    </div>
                </div>
                <div className='product_details'>
                    {/* <h1>Product Details</h1> */}
                    <div className='product_detail_container'>
                        <div className='product_detail_price'>
                            <h1>₹ 149</h1><h3>In Stoke</h3>
                        </div>
                        <div className='product_detail_heading'>
                            {/* <h1>LG 6.5 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine</h1> */}
                        </div>
                        <div className='product_description'>
                            <p>Nutrition food plant</p>
                            <p>Aromatic and decorative</p>
                            <p>40 pieces per packet</p>
                        </div>
                        <h3>Brand: A product of AnimaDrive</h3>
                        <h3>Tags: Aromatic & Decorative Nutrition Plant Food, AnimaDrive</h3>
                        <p>It is eco-friendly, non-toxic, consumes low energy input for composting and is a recycled biological product. It has  palette in multicolours and multi-flavors with an adept shape and size which acts like a top off of supplements to recharge the sustenance in the plants root and you can arrange off it after a month. Another benefit of our product is that you can't over feed your plants with it, Because it won't consume plants like different kinds of fertilizers. The Design of our  product is inspired by dung beetle concept.</p>
                    </div>
                </div>
                <div className='other_product_action'>
                    <div className='other_product_action_container'>
                        <div className='share'>
                            <h3>Share:</h3>
                            <div className='share_links'>
                                <Link className='share_link_item'>
                                    <FacebookIcon />
                                </Link>
                                <Link className='share_link_item'>
                                    <InstagramIcon />
                                </Link>
                                <Link className='share_link_item'>
                                    <WhatsAppIcon />
                                </Link>
                            </div>
                        </div>
                        <form>
                            <div className='product_rating_container'>
                                <h1>Your Valuable Review</h1>
                            </div>
                            <div className='input_detail'>
                                <textarea cols='80' rows='10' placeholder='Write Somethings about product' />
                                <div className='user_detail'>
                                    <div className='user'>
                                        <input type='text' placeholder='Username' />
                                    </div>
                                    <div className='user'>
                                        <input type='email' placeholder='Your email' />
                                    </div>
                                </div>
                                <div className='input_submit_btn'>
                                    <Button buttonStyle='btn_outline'>Submit</Button>
                                </div>
                            </div>
                        </form>
                    </ div>
                </div>
            </div>
        </div>
    )
}

export default Product
