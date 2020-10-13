import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
// import { connect } from 'react-redux'
import './Products_card.css'
import { Link } from 'react-router-dom'
import Button from '../Button'
// import { addToCart } from '../Cart/actions/cartActions'

function Product_card({ id, name, price, pic_src, description, onSelectAddToCart }) {
    const [product, setProduct, removeProduct] = useCookies()

    const [changeClass, setChangeClass] = useState('')
    const [product_id, setProduct_id] = useState()

    const changeCSS = () => {
        (window.innerWidth > 400)
            ? setChangeClass('btn_large')
            : setChangeClass('btn_medium')
    }

    // const handleAddToCart = ({ id, name, pic_src, price, description }) => {
    //     setProduct_id(id)
    //     setProduct(`product_${id}`, { id: id, title: name, price: price, image: pic_src, desc: description, quantity: 1 }, { path: '/' })
    // }

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
                            <p>It is eco-friendly, non-toxic, consumes low energy input for composting and is a recycled biological product. It has  palette in multicolours and multi-flavors with an adept shape and size which acts like a top off of supplements to recharge the sustenance in the plants root and you can arrange off it after a month. Another benefit of our product is that you can't over feed your plants with it, Because it won't consume plants like different kinds of fertilizers. The Design of our  product is inspired by dung beetle concept.</p>
                        </div>
                        <div className='product_btn'>
                            <Button path='/cart' className='btn' buttonStyle='btn_outline' onClick='' >Add to cart</Button>
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
