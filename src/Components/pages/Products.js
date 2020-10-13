import React, { useEffect, useRef } from 'react'
import './Products_card.css'
import Axios from 'axios'
import Card from './Product_card'

const product_list = [
    {
        id: 1,
        title: "product_1",
        price: '$23,000',
        image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg"
    },
    {
        id: 2,
        title: "product_2",
        price: '$21,000',
        image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg"
    },
    {
        id: 3,
        title: "product_3",
        price: '$13,000',
        image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg"
    }
]


function Products() {
    const ScrollDoc = useRef()

    const handleScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = ScrollDoc.current.scrollTop
        console.log(`onScroll, window.scrollY: ${scrollTop} myRef.scrollTop: ${scrollTop}`)
        // if (scrollTop >= 10) {
        //     alert('scrolled')
        // }
    }

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
    }, [])

    return (
        <>
            <div className='products'>
                <div className='products_container'>
                    <h1>Products</h1>
                    <div className='all_products'>
                        <ul className='all_products_item'>{product_list.map(item =>
                            <Card id={item.id} name={item.title} price={item.price} pic_src={item.image} />
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
