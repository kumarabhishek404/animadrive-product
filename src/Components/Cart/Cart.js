import React, { Component, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '../Button'
import CartItem from './Cart_item';
import '../pages/Cart.css'

function Cart(props) {
    const [cookiesArray, setCookiesArray] = useState([])
    const [total, setTotal] = useState(0)

    const [productFromCookies, getProductFromCookies] = useCookies()
    // const [quantity, setQuantity] = useCookies()


    useEffect(() => {
        getProductFromCookies({ path: '/' })
        console.log(productFromCookies);
        var objMap = new Map(Object.entries(productFromCookies));

        objMap.forEach((item, key) => {
            if (key.includes('product')) {
                cookiesArray.push(item)
                console.log(key, item);
            }
        })
        console.log(cookiesArray);
        console.log(cookiesArray);
        cookiesArray.map(item => {
            console.log(item.price);
            setTotal(prevState => prevState + item.price)
        })
    }, [])

    return (
        <div className="cart">
            <h1>You have ordered:</h1>
            <div className="cart_container">
                <div className="cart_container_wrapper">
                    {cookiesArray.length
                        ? (
                            cookiesArray.map(item =>
                                <CartItem item={item} />
                            )
                        ) :
                        (
                            <p>Nothing.</p>
                        )
                    }

                </div>
            </div>
            <div className="container">
                <div className="collection">
                    <h2 className="collection-item"><b>Total: {total} $</b></h2>
                </div>
                <div className="checkout">
                    <Button className="waves-effect waves-light btn">Checkout</Button>
                </div>
            </div>
        </div>
    )
}
export default Cart;