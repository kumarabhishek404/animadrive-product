import React from 'react'
import './MyOrders.css'
import { Link } from 'react-router-dom'
import Button from '../Button'


const MyOrders = [
    {
        id: 1,
        title: "product_1",
        price: '$23,000',
        image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg",
        quantity: 2
    },
    {
        id: 2,
        title: "product_2",
        price: '$21,000',
        image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg",
        quantity: 4
    },
    {
        id: 3,
        title: "product_3",
        price: '$13,000',
        image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg",
        quantity: 1
    }
]

function Acount() {
    return (
        <>
            <div className='acount'>
                <div className='acount_container'>
                    <div className='acount_container_wrapper'>
                        <h1>Your Orders</h1>
                        <div className='my_order'>
                            <div className='my_order_list_head'>
                                <h2>Id</h2>
                                <h2>Image</h2>
                                <h2>Title</h2>
                                <h3>Price</h3>
                                <h3>Quantity</h3>
                            </div>
                            {
                                (MyOrders.length)
                                    ? <div className='my_order_list_container'>
                                        <div className='my_order_list_wrapper'>
                                            {
                                                MyOrders.map(order =>
                                                    <div className='my_order_list'>
                                                        <h2>{order.id}</h2>
                                                        <figure className='order_image'>
                                                            <img src={order.image} />
                                                        </figure>
                                                        <h2>{order.title}</h2>
                                                        <h3>{order.price}</h3>
                                                        <h3>{order.quantity}</h3>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className='more_shoping'>
                                            <Link to='/products'>
                                                <Button>More Shoping</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    : <div>
                                        <h1>You did'nt order something</h1>
                                        <Link to='/products'>
                                            <Button>Start Shoping</Button>
                                        </Link>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Acount
