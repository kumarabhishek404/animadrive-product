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
                        <ul className='all_products_item'>{product_list.map(item =>
                            <Card id={item.id} name={item.title} price={item.price} pic_src={item.image} />
                        )}
                        </ul>
                        <h1 onClick={handleScrollToTop}>Scroll</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
