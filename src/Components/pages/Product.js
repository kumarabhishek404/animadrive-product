import React, { useState, useEffect } from 'react'
import './Product.css'
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
    const [selectedImage, setSelectedImage] = useState('https://elcopcbonline.com/photos/product/4/176/4.jpg')

    const clickLoadImage = (e) => {
        setSelectedImage(e.target.src)
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='product'>
            <div className='product_container'>
                <div className='product_image'>
                    <div className='product_image_container'>
                        <div className='product_main_image'>
                            <img src={selectedImage} alt='Image' />
                        </div>
                        <div className='product_image_side'>
                            <img src='https://elcopcbonline.com/photos/product/4/176/4.jpg' alt='Image' onClick={clickLoadImage} />
                            <img src='https://m.media-amazon.com/images/I/41+fXlXMPyL._SR500,500_.jpg' onClick={clickLoadImage} />
                            <img src='https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg' alt='Image' onClick={clickLoadImage} />
                        </div>
                    </div>
                </div>
                <div className='product_details'>
                    <h1>Product Details</h1>
                    <div className='product_detail_container'>
                        <div className='product_detail_price'>
                            <h1>$29,000</h1><h6>In Stoke</h6>
                        </div>
                        <div className='product_detail_heading'>
                            <h1>LG 6.5 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine</h1>
                        </div>
                        <div className='product_description'>
                            <p>Made from floral waste</p>
                            <p>Tulsi seed packaging</p>
                            <p>40 incense sticks</p>
                            <p>Bambooless</p>
                            <p>Charcoal free</p>
                            <p>30 minutes burning time</p>
                        </div>
                        <h3>Category: Essence of India</h3>
                        <h3>Tags: Aromatic Incense Sticks, Essence Of India, Help Us Green</h3>
                    </div>
                </div>
                <div className='description'>
                    <h1>Description</h1>
                    <p>HelpUsGreen Incense sticks are made out of floral waste from religious sites. The packaging is made of Tulsi seed paper which when sown in the soil, grows into a Tulsi plant. The pack contains 40 incense sticks which are bambooless and charcoal-free. A stand is included inside. Burning time for each incense stick is approximately 30 minutes.</p>
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
                                <h3>Rating:</h3>
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
