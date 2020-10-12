import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import CartItem from './Cart_item'
import Button from '../Button'
import './Cart.css'

const result = [
    { title: 'Green Gud', price: 149, image: '/Images/1.jpg', quantity: 1 },
    { title: 'Green Gud', price: 149, image: '/Images/2.jpg', quantity: 2 },
    { title: 'Green Gud', price: 149, image: 'Images/3.jpg', quantity: 3 }
]



function Cart() {
    const [cartData, setCartData] = useState([])
    const [coupon, setCoupon] = useState(false)
    const [couponList, setCouponList] = useState([
        'Abhishek',
        'Sushant',
        'Himanshu'
    ])
    const [total, setTotal] = useState(0)
    const [quant, setQuant] = useState(0)
    const [couponState, setCouponState] = useState()

    // const couponInput = useRef()
    useEffect(() => {
        window.scrollTo(0, 0)
        Axios.get("http://localhost:3000/cart/mycart")
            .then(response => {
                setCartData(response.data)
            })

    }, [])

    const handleUpdateCart = () => {
        window.location.reload()
        // alert("alert")
        // handleProductTotal()
        // setTotal(total)
    }
    const handleCouponApply = () => {
        (couponList.length)
            ? (couponList.includes(couponState))
                ? setCoupon(true)
                : setCoupon(false)
            : setCoupon(false)
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
                        <Button buttonStyle='btn_outline' onClick={handleUpdateCart}>Update cart</Button>
                        <Button path='/shop' buttonStyle='btn_outline'>More Shop</Button>
                    </div>
                    <div className='final_payment'>
                        <div className='coupon_container'>
                            <h1>Coupon Discount</h1>
                            <hr />
                            <h3>Enter your coupen code if you have</h3>
                            <form>
                                <input type='text' onChange={e => setCouponState(e.target.value)} placeholder='Enter your code' />
                                <Button onClick={handleCouponApply}>Apply</Button>
                            </form>
                        </div>
                        <div className='cart_total'>
                            <h1>Cart total</h1>
                            <hr />
                            <h3>Total amount: ₹{total}</h3>
                            <h3>After Discount: ₹{coupon ? Math.ceil(total - (total / 10)) : total}</h3>
                            <Button path='/order'>Proceed</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart