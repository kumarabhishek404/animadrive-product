import React, { useEffect, useState } from 'react'
import './Products_card.css'
import Axios from 'axios'
import Card from './Product_card'


function Products() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:3000/products")
        .then(response=>{
            setProducts(response.data)
        })
    },[])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='products'>
                <div className='products_container'>
                    <h1>Products</h1>
                    <div className='all_products'>
                        <ul className='all_products_item'>{products.map(item =>
                            <Card id={item.id} name={item.product_name} price={item.price} pic_src={item.thumnail} description={item.shot_desc} />
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
