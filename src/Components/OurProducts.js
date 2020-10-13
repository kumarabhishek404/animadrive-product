import React from "react";
import "./OurProducts.css";
import { Link } from 'react-router-dom'
import Button from "./Button"

const product_list = [
    {
        id: 1,
        title: "Green Gud",
        price: '₹ 149',
        image: "/Images/1.png",
        description: 'It is eco-friendly, non-toxic, consumes low energy input for composting and is a recycled biological product. It has palette in multicolours and multi-flavors with an adept shape and size which acts like a top off of supplements to recharge the sustenance in the plants root and you can arrange off it after a month.'
    },
    {
        id: 2,
        title: "Green Gud",
        price: '₹ 149',
        image: "/Images/2.png",
        description: 'It is eco-friendly, non-toxic, consumes low energy input for composting and is a recycled biological product. It has palette in multicolours and multi-flavors with an adept shape and size which acts like a top off of supplements to recharge the sustenance in the plants root and you can arrange off it after a month.'
    },
    {
        id: 3,
        title: "Green Gud",
        price: '₹ 149',
        image: "/Images/3.png",
        description: 'It is eco-friendly, non-toxic, consumes low energy input for composting and is a recycled biological product. It has palette in multicolours and multi-flavors with an adept shape and size which acts like a top off of supplements to recharge the sustenance in the plants root and you can arrange off it after a month.'
    }
]


function OurProducts() {
    return <>
        <div className='our_products'>
            <h1>Our Products</h1>
            <div className='our_products_container'>
                <div className='our_products_wrapper'>
                    {
                        product_list.map(product =>
                            <div className='single_product'>
                                <div className='single_product_image_container'>
                                    <figure>
                                        <img src={product.image} />
                                    </figure>
                                </div>
                                <h1>{product.title}</h1>
                                <h3>{product.price}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
            <Button buttonStyle='btn_outline'>Shoping</Button>
        </div>
    </>

}

export default OurProducts;
