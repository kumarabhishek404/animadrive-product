import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ReadMoreReact from 'read-more-react';
import './Products_card.css'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Axios from 'axios';

function Product_card({ id, name, price, pic_src, description }) {
    const [product, setProduct, removeProduct] = useCookies()

    const [changeClass, setChangeClass] = useState('')
    const [product_id, setProduct_id] = useState()


    const [readMore, setReadMore] = useState(false)

    const listenScrollEvent = () => {
        if (window.screen.availWidth < 690) {
            return setReadMore(true)
        } else {
            return setReadMore(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, [])

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
            .then(respones => {
                console.log(respones, 'product is added')
            })
            .catch(error => {
                console.log('error is ', error)
            })


    }
    const onhandleRemoveProduct = (id) => {
        removeProduct(`product_${id}`)
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
                            <p>It is eco-friendly, non - toxic, consumes low energy input for composting...</p>
                        </div>
                        <div className='product_btn'>
                            <Button path='/cart' className='btn' buttonStyle='btn_outline' onClick={() => handleAddToCart({ id, name, price, pic_src, description })} >Add to cart</Button>
                            <Button path={`/order/${id}`} buttonStyle='btn_outline' onClick={() => onhandleRemoveProduct(id)} >Buy now</Button>
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
