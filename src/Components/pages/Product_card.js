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

    const handleAddToCart = ({ id, name, pic_src, price, description }) => {
        setProduct_id(id)
        setProduct(`product_${id}`, { id: id, title: name, price: price, image: pic_src, desc: description, quantity: 1 }, { path: '/' })
    }

    const onhandleRemoveProduct = (id) => {
        removeProduct(`product_${id}`)
    }

    useEffect(() => {
        window.addEventListener('load', changeCSS)
    }, [])


    return (
        <>
<<<<<<< HEAD
            <div className='card_item'>
                <Link to='/products' className='card_item_link'>
                    <div className='card_item_info'>
                        <h1 className='card_item_text'>{name}</h1>
                        <h1>Price: {price}</h1>
                        <div className='product_description'>
                            <p>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.</p>
                        </div>
                        <div className='product_btn'>
                            <Button className='btn' buttonStyle='btn_outline' onClick={() => handleAddToCart({ id, name, price, pic_src, description })} >Add to cart</Button>
                            <Button buttonStyle='btn_outline' onClick={() => onhandleRemoveProduct(id)} >Buy now</Button>
                        </div>
                    </div>
                    <figure className='card_item_pic-wrap'>
                        <img src={pic_src} alt={id} className='card_item_image' />
                    </figure>
                </Link>
            </div>
=======
           <section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<img src="images/plant.png" alt="green apple slice"/>
			</div>

		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>Delicious plants</h1>
		</div>
		<div class="price">
			R$ <span>7.93</span>
		</div>
		
		<div class="description">
			<h3>DESCRIPTION</h3>
			<ul>
				<li>green plants are green</li>
				<li>green plants are green</li>
				<li>green plants are green</li>
				<li>green plants are green and plant food </li>
			</ul>
		</div>
		<button class="buy--btn">ADD TO CART</button>
	</div>
</section>
        <hr/>


>>>>>>> f803b1623fc34a58f416a1b7300b15a986511c6f
        </>
    )
}

export default Product_card;
