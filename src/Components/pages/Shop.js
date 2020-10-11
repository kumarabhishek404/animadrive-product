import React, { useEffect, useRef } from 'react'
import './Products_card.css'
import Axios from 'axios'
import Card from './Product_card'

const product_list = [
    {
        id: 1,
        title: "product_1",
        price: '$23,000',
        image: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/headphone/c/n/5/ydtdqc01jy-mi-original-imaftfwercszkuby.jpeg?q=70"
    },
    {
        id: 2,
        title: "product_2",
        price: '$21,000',
        image: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/headphone/c/n/5/ydtdqc01jy-mi-original-imaftfwercszkuby.jpeg?q=70"
    },
    {
        id: 3,
        title: "product_3",
        price: '$13,000',
        image: "https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/headphone/c/n/5/ydtdqc01jy-mi-original-imaftfwercszkuby.jpeg?q=70"
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

    const handleScrollToTop = () => {
        alert('clicked')
        // window.scrollTo(0, 0)
        scrollDoc2.current.scrollTo(0, 0)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className='products' ref={scrollDoc2}>
                <div className='products_container'>
                    <h1>Products</h1>
                    <div className='all_products'>
                        <div className='all_products_item'>{product_list.map(item =>
                            <Card id={item.id} name={item.title} price={item.price} pic_src={item.image} />
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
