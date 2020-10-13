import React, { useEffect, useRef } from 'react'
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
    const scrollDoc2 = useRef()

    useEffect(() => {
        Axios.get("http://api.openweathermap.org/data/2.5/weather?q=Agra,IN&appid=28eadd90ad607fa43911b4f733752611&units=metric")
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className='products' ref={scrollDoc2}>
                <div className='products_container'>
                    <h1>Our Products</h1>
                    <div className='all_products'>
                        <div className='all_products_item'>{product_list.map(item =>
                            <Card id={item.id} name={item.title} price={item.price} pic_src={item.image} desc={item.description} />
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
