import React, { useState, useEffect } from 'react'
import './Products_card.css'
import { Link } from 'react-router-dom'
import Button from '../Button'

function Product_card({ name, price, pic_src }) {

    const [changeClass, setChangeClass] = useState('')

    const changeCSS = () => {
        (window.innerWidth > 400)
            ? setChangeClass('btn_large')
            : setChangeClass('btn_medium')
    }
    useEffect(() => {
        window.addEventListener('load', changeCSS)
    }, [])


    return (
        <>
            <li className='card_item'>
                <Link to='/products' className='card_item_link'>
                    <figure className='card_item_pic-wrap'>
                        <image src={pic_src} alt='product Image' className='card_item_image' />
                    </figure>
                    <div className='card_item_info'>
                        <h1 className='card_item_text'>{name}</h1>
                        <h1>Price: {price}</h1>
                        <div className='product_description'>
                            <p>A paragraph is a series<br /> of related sentences developing a <br />central idea, called the topic.<br /> Try to think about paragraphin terms of th: a paragraph<br /> is a sentence or a group of sentences e central,<br /> unified idea. Paragraphs add one idea at a time to yt.</p>
                        </div>
                        <div className='product_btn'>
                            <Button id='btn' buttonSize={changeClass} buttonStyle='btn_outline'>Add to cart</Button>
                            <Button buttonSize={changeClass} buttonStyle='btn_outline'>Buy now</Button>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Product_card
