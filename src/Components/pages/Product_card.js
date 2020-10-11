import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import './Products_card.css'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Axios from 'axios';

function Product_card({ id, name, price, pic_src, description }) {
    // Axios.create({
    //     baseURL: 'http://localhost:3000/',
    //     withCredentials: true,
    // });
    
    // Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8,"applications';
    // Axios.defaults.withCredentials = true;
    // Axios.defaults.crossDomain = true;
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "http://localhost:4000/",
    }
  };
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
        // Axios.post("http://localhost:3000/cart/addToCart",
        //     // {
        //     //     product_name: name,
        //     //     price: price,
        //     //     thumbnail: pic_src,
        //     //     quantity: 1,
        //     //     product_id: id
        //     //   }
        //     {
        //         product_name: "sja",
        //         price: 123,
        //         thumbnail: "pic_src",
        //         quantity: 1,
        //         product_id: 1
        //       }
        // )
        // .then(respones=>{
        //     console.log(respones, 'product is added')
        // })
        // .catch(error=>{
        //     console.log('error is ', error)
        // })

        
    }

    const onhandleRemoveProduct = (id) => {
        removeProduct(`product_${id}`)
    }
    const orderNow = () => {
     Axios.post("http://localhost:4000/placeOrder/main/order",{
        firstName:"jk",
        lastName:"jk",
        email:"jk",
        address:"jk",
        pincode:123,
        country:"jk",
        payment_method:"jk",
        total_amount:23,
        product_id:1,
        customer_id:1
     },axiosConfig).then((res) =>{
         console.log(res, "this is res");
     }).catch((err) => {console.log(err, "hey error ppppppppp")});
    }



    useEffect(() => {
        window.addEventListener('load', changeCSS)
    }, [])


    return (
        <>
            <li className='card_item'>
                <Link to='/products' className='card_item_link'>
                    <figure className='card_item_pic-wrap'>
                        <img src={pic_src} alt={id} className='card_item_image' />
                    </figure>
                    <div className='card_item_info'>
                        <h1 className='card_item_text'>{name}</h1>
                        <h1>Price: {price}</h1>
                        <div className='product_description'>
                            <p>{description}</p>
                        </div>
                        <div className='product_btn'>
                            <Button className='btn' buttonStyle='btn_outline' onClick={() => handleAddToCart({ id, name, price, pic_src, description })} >Add to cart</Button>
                            <Button buttonStyle='btn_outline' onClick={() => orderNow()} >Buy now</Button>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Product_card;
