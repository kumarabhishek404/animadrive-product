import React, { useEffect,useRef, useState } from 'react'
import './Products_card.css'
import Axios from 'axios'
import Card from './Product_card'

function Products() {

    const [products,setProducts]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:4000/products")
        .then(response=>{
            setProducts(response.data)
        })
    },[])
    const scrollDoc2 = useRef()

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className='products' ref={scrollDoc2}>
                <div className='products_container'>
                    <h1>Products</h1>
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
