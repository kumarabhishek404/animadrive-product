import React, { useEffect, useState } from 'react'
import './Products_card.css'
import Axios from 'axios'
import Card from './Product_card'


function Products() {
<<<<<<< HEAD
    const [products,setProducts]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:3000/products")
        .then(response=>{
            setProducts(response.data)
        })
    },[])
=======
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
>>>>>>> 3f15a15b35db8d0cc27c14d46907f15bd6c4d7d0

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
                        <ul className='all_products_item'>{products.map(item =>
                            <Card id={item.id} name={item.product_name} price={item.price} pic_src={item.thumnail} description={item.shot_desc} />
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
