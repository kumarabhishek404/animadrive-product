import React, { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '../Button'
import './Cart.css'
import Axios from 'axios';


function Cart_item({ productName,productID, product_src, price, ProductQuantity, onProductTotal, onProductQuantity }) {

    const [quantity, setQuantity] = useState(ProductQuantity)
    const [productPrice, setProductPrice] = useState(price)
    // const [singlePrice, setSinglePrice] = useState(price)

    const handleQuantityIncrement = () => {
        Axios.put("http://52.66.234.240:4000/cart/incrimentCart",{
            ID: productID
        })
        .then(data=>{
            console.log(data,"success");
            setQuantity(prevCount => prevCount + 1)
            setProductPrice((price * quantity) + price)
        })
        .catch(err=>{
            console.log("there is an error",err);
        })

        // setQuantity(prevCount => prevCount + 1)
        // setProductPrice((price * quantity) + price)
        // setSinglePrice(price * quantity)
        // onProductTotal(singlePrice)
    }

    const handleQuantityDecrement = () => {
            Axios.put("http://52.66.234.240:4000/cart/decrimentCart",{
                ID: productID
            })
        .then(data=>{
            console.log(data,"success");
            setQuantity(prevCount => prevCount - 1)
            setProductPrice(productPrice - price)

        })
        .catch(err=>{
            console.log("there is an error",err);
        })
            
    }

    useEffect(() => {
        setProductPrice(price * ProductQuantity)
        onProductTotal(price * ProductQuantity)
        onProductQuantity(quantity)
    }, [])

    return (
        <div className='product_item_list'>
            <div className='product_item_container'>
                <div className='cart_product_image'>
                    <figure className='product_image_wrap'>
                        <img src={product_src} />
                    </figure>
                    <h2>{`₹${price}`}</h2>
                </div>
                <div className='cart_product_info'>
                    <h2>{productName}</h2>
                    <h2 className='price_head'>{`₹${productPrice}`}</h2>
                </div>
                <div className='product_action'>
                    <div className='product_quantity'>
                        <RemoveIcon onClick={handleQuantityDecrement} /><h3>{quantity}</h3><AddIcon onClick={handleQuantityIncrement} />
                    </div>
                    <div>
                        <Button>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart_item
