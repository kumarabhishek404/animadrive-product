import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import '../pages/Cart.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '../Button'
import { Link } from 'react-router-dom'

function Cart_item({ item }) {
    const [product, setProduct, removeProduct] = useCookies()

    const [singleTotal, setSingleTotal] = useState(item.price)
    const [productQuantity, setProductQuantity] = useState(1)

    useEffect(() => {
        setProductQuantity(item.quantity)
        setSingleTotal(item.price * (item.quantity))
    }, [])

    //to remove the item completely
    const handleRemoveProduct = (id) => {
        removeProduct(`product_${id}`)
        window.location.reload()

    }
    //to add the quantity
    const handleAddQuantity = (id, name, image, desc, price, quantity) => {
        // alert(id, name)
        setProductQuantity(prevQuantity => prevQuantity + 1)
        setSingleTotal((price * (productQuantity)) + price)
        // console.log(id, name, image, desc, price, productQuantity);
        setProduct(`product_${id}`, { id: id, title: name, image: image, price: price, desc: desc, quantity: productQuantity }, { path: '/' })
        // window.location.reload()
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id, name, image, desc, price) => {
        if (productQuantity > 1) {
            setProductQuantity(prevQuantity => prevQuantity - 1)
            setSingleTotal(singleTotal - (price))
        }
        // console.log(id, name, image, desc, price, productQuantity);
        setProduct(`product_${id}`, { id: id, title: name, image: image, price: price, desc: desc, quantity: productQuantity }, { path: '/' })
        // window.location.reload()
    }

    return (
        <div>
            <div className="product_item_list" key={item.id}>
                <div className='product_item_container'>
                    <div className="cart_product_image">
                        <figure className='product_image_wrap'>
                            <img src={item.image} alt={item.id} className="" />
                        </figure>
                    </div>
                    <div className="cart_product_info">
                        <div className='title_description'>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <div className='price_head'>${singleTotal}
                        </div>
                    </div>
                    <div className='product_action'>
                        <div className='product_quantity'>
                            <Link to="/cart"><RemoveIcon onClick={() => handleSubtractQuantity(item.id, item.title, item.image, item.desc, item.price, item.quantity)} /></Link>
                            <h3>
                                {productQuantity}
                            </h3>
                            <Link to="/cart"><AddIcon onClick={() => handleAddQuantity(item.id, item.title, item.image, item.desc, item.price, item.quantity)} /></Link>
                        </div>
                        <Button className="waves-effect waves-light btn pink remove" onClick={() => handleRemoveProduct(item.id)} >Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart_item
