import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import CartItem from './Cart_item'
import Button from '../Button'
import './Cart.css'

const result = [
    { title: 'product_1', price: 1, image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg', quantity: 2 },
    { title: 'product_2', price: 2, image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg', quantity: 2 },
    { title: 'product_3', price: 3, image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg', quantity: 3 }
]

function Cart() {
    const [cartData, setCartData] = useState([])
    const [total, setTotal] = useState(0)
    const [quant, setQuant] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    const handleUpdateCart = () => {
        // alert("alert")
        // handleProductTotal()
        // setTotal(total)
    }

    const handleProductTotal = (tot) => {
        setTotal(prevTotal => prevTotal + tot)
    }

    const handleProductQuantity = (quant) => {
        setQuant(prevQuant => prevQuant + quant)
    }

    return (
        <>
            <div className='cart'>
                <h1>Cart</h1>
                <div className='cart_container'>
                    <div className='cart_container_wrapper'>
                        {
                            result.map(product =>
                                <CartItem productName={product.title} price={product.price} onProductTotal={handleProductTotal} onProductQuantity={handleProductQuantity} product_src={product.image} ProductQuantity={product.quantity} />
                            )
                        }
                    </div>



                    <div className='cart_action'>
                        <h1>{quant}</h1>,
                        <h1>{total}</h1>
                        <Button buttonStyle='btn_outline' onClick={handleUpdateCart}>Update cart</Button>
                        <Button buttonStyle='btn_outline'>More Shop</Button>
                    </div>
                    <div className='final_payment'>
                        <div className='coupon_container'>
                            <h1>Coupon Discount</h1>
                            <hr />
                            <h3>Enter your coupen code if you have</h3>
                            <form>
                                <input type='text' placeholder='Enter your code' />
                                <Button path='/'>Apply</Button>
                            </form>
                        </div>
                        <div className='cart_total'>
                            <h1>Cart total</h1>
                            <hr />
                            <h3>Total amount: $34,000</h3>
                            <h3>After Discount: $30,000</h3>
                            <Button path='/order'>Proceed</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
