import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '../Button'
import './Cart.css'

function Cart_item({ productName, product_src, price }) {

    const [quantity, setQuantity] = useState(1)

    const quantityIncrement = () => setQuantity(prevCount => prevCount + 1)
    const quantityDecrement = () => {
        (quantity > 0)
            ? setQuantity(prevCount => prevCount - 1)
            : setQuantity(0)
    }


    return (
        <div className='product_item_list'>
            <div className='product_item_container'>
                <div className='cart_product_image'>
                    <figure className='product_image_wrap'>
                        <img src={product_src} />
                    </figure>
                    <h2>{price}</h2>
                </div>
                <div className='cart_product_info'>
                    <h2>{productName}</h2>
                    <h2 className='price_head'>{price}</h2>
                </div>
                <div className='product_action'>
                    <div className='product_quantity'>
                        <RemoveIcon onClick={quantityDecrement} /><h3>{quantity}</h3><AddIcon onClick={quantityIncrement} />
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
