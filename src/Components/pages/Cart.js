import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './Cart_item'
import Button from '../Button'
import './Cart.css'

function Cart() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='cart'>
                <h1>Cart</h1>
                <div className='cart_container'>
                    <div className='cart_container_wrapper'>
                        <CartItem productName='Plant food 1' price='$23,000' product_src='https://elcopcbonline.com/photos/product/4/176/4.jpg' />
                        <CartItem productName='Plant food 2' price='$21,000' product_src='https://elcopcbonline.com/photos/product/4/176/4.jpg' />
                        <CartItem productName='Plant food 3' price='$26,000' product_src='https://elcopcbonline.com/photos/product/4/176/4.jpg' />
                    </div>
                    <div className='cart_action'>
                        <Button buttonStyle='btn_outline'>Update cart</Button>
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
