import React from "react";
import "./OurProducts.css";
import { Link } from 'react-router-dom'
import Button from "./Button"

function OurProducts() {
    return <>
        <section id="Ourproducts-section">
            <h1>
                Our Products
      </h1>
            <div className='OurProducts-main-div'>
                <div className='OurProduct-section-card' >
                    <div className='card-img-div'>
                        <img src='/Images/1.jpg' />
                    </div>
                    <div className='card-down-div'>
                        <h3>
                            Green Gud
                </h3>
                        <div className='OurProduct-subdiv-down'>
                            <p>
                                ₹ 149
                    </p>
                        </div>
                    </div>
                </div>
                <div className='OurProduct-section-card' >
                    <div className='card-img-div'>
                        <img src='/Images/2.jpg' />
                    </div>
                    <div className='card-down-div'>
                        <h3>
                            Green Gud
                </h3>
                        <div className='OurProduct-subdiv-down'>
                            <p>
                                ₹ 149
                    </p>
                        </div>
                    </div>
                </div>
                <div className='OurProduct-section-card' >
                    <div className='card-img-div'>
                        <img src='/Images/3.jpg' />
                    </div>
                    <div className='card-down-div'>
                        <h3>
                            Green Gud
                </h3>
                        <div className='OurProduct-subdiv-down'>
                            <p>
                                ₹ 149
                    </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button-shop-now'>
                <Button path='/shop'>
                    Shop Now
                    </Button>
            </div>
        </section>;
    </>

}

export default OurProducts;
