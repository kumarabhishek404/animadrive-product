import React from "react";
import "./OurProducts.css";
import Button from "./Button"

function OurProducts() {
  return <>
  <section id="Ourproducts-section">
      <h1>
          Products
      </h1>
    <div className='OurProducts-main-div'>
        <div className='OurProduct-section-card' >
            <div className='card-img-div'>
                <img src='https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'/>
            </div>
            <div className='card-down-div'>
                <h3>
                    Product_1
                </h3>
                <div className='OurProduct-subdiv-down'>
                    <p>
                        Price$ 179
                    </p>
                </div>
            </div>
        </div>
        <div className='OurProduct-section-card' >
            <div className='card-img-div'>
                <img src='https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'/>
            </div>
            <div className='card-down-div'>
                <h3>
                    Product_1
                </h3>
                <div className='OurProduct-subdiv-down'>
                    <p>
                        Price$ 179
                    </p>
                </div>
            </div>
        </div>
        <div className='OurProduct-section-card' >
            <div className='card-img-div'>
                <img src='https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'/>
            </div>
            <div className='card-down-div'>
                <h3>
                    Product_1
                </h3>
                <div className='OurProduct-subdiv-down'>
                    <p>
                        Price$ 179
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className='button-shop-now'>
    <Button>
        Shop Now
    </Button>
    </div>
 </section>;
 </>
  
}

export default OurProducts;
