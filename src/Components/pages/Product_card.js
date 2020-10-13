import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import './Products_card.css'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Axios from 'axios';

function Product_card({ id, name, price, pic_src, description }) {
    console.log(window.userData)
    const DATA=window.userData
    const [product, setProduct, removeProduct] = useCookies()

    const [changeClass, setChangeClass] = useState('')
    const [product_id, setProduct_id] = useState()

    const changeCSS = () => {
        (window.innerWidth > 400)
            ? setChangeClass('btn_large')
            : setChangeClass('btn_medium')
    }

    const handleAddToCart = ({ id, name, pic_src, price, description }) => {
        setProduct_id(id)
        setProduct(`product_${id}`, { id: id, title: name, price: price, image: pic_src, desc: description, quantity: 1 }, { path: '/' })
        Axios.post("http://localhost:4000/cart/addToCart",
            {
                product_name: name,
                price: price,
                thumbnail: pic_src,
                quantity: 1,
                product_id: id,
            }
        )
        .then(respones=>{
            console.log(respones, 'product is added')
        })
        .catch(error=>{
            console.log('error is ', error)
        })

        
    }
    // const handleAddToCart = ({ id, name, pic_src, price, description }) => {
    //     setProduct_id(id)
    //     setProduct(`product_${id}`, { id: id, title: name, price: price, image: pic_src, desc: description, quantity: 1 }, { path: '/' })
    // }

    const onhandleRemoveProduct = (id) => {
        removeProduct(`product_${id}`)
    }
    const orderNow = () => {
     Axios.post("http://localhost:4000/placeOrder/main/order",{
        firstName:DATA.firstName,
        lastName:DATA.lastName,
        email:DATA.email,
        address:"AA",
        pincode:123,
        country:"jk",
        payment_method:"jk",
        total_amount:23,
        product_id:1,
        customer_id:1
     },{headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        // 'Content-Type': 'text/plain',
        withCredentials: true,
        crossDomain: true,
        mode: 'no-cors',
      }}).then((res) =>{
         console.log(res, "this is res");
     }).catch((err) => {console.log(err, "hey error ppppppppp")});
    }



    useEffect(() => {
        window.addEventListener('load', changeCSS)
    }, [])


    return (
        <>
            <div className='card_item'>
                <Link to='/products' className='card_item_link'>
                    <div className='card_item_info'>
                        <h1 className='card_item_text'>{name}</h1>
                        <h1>Price: {price}</h1>
                        <div className='product_description'>
                            <p>{description}</p>
                        </div>
                        <div className='product_btn'>
                            <Button path='/cart' className='btn' buttonStyle='btn_outline' onClick={() => handleAddToCart({ id, name, price, pic_src, description })} >Add to cart</Button>
                            <Button path='/order' buttonStyle='btn_outline' onClick={() => onhandleRemoveProduct(id)} >Buy now</Button>
                        </div>
                    </div>
                    <figure className='card_item_pic-wrap'>
                        <img src={pic_src} alt={id} className='card_item_image' />
                    </figure>
                </Link>
            </div>
        </>
    )
}

export default Product_card;
