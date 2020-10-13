import React, { useEffect, useRef, useState } from 'react'
import './Products_card.css'
import Axios from 'axios'
import Card from './Product_card'

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


function Products() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:4000/products")
            .then(response => {
                setProducts(response.data)
            })
    }, [])
    const scrollDoc2 = useRef()

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className='products' ref={scrollDoc2}>
                <div className='products_container'>
                    <h1>Our Products</h1>
                    <div className='all_products'>
                        <div className='all_products_item'>{products.map(item =>
                            <Card id={item.id} name={item.product_name} price={item.price} pic_src="/Images/3.jpg" description={item.shot_desc} />
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
