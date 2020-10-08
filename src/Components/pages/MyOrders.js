import React from 'react'
import './MyOrders.css'
import { Link } from 'react-router-dom'
import Button from '../Button'

const MyOrders = [
    { id: 1, title: 'product_1', quantity: 23 },
    { id: 2, title: 'product_2', quantity: 11 },
    { id: 3, title: 'product_3', quantity: 46 }
]

function Acount() {
    return (
        <>
            <div className='acount'>
                <div className='acount_container'>
                    <div className='acount_container_wrapper'>
                        <h1>Your Orders</h1>
                        <div className='my_order'>
                            {
                                (MyOrders.length)
                                    ? <div className='my_order_list_container'>
                                        <div className='my_order_list_wrapper'>
                                            {
                                                MyOrders.map(order =>
                                                    <div className='my_order_list'>
                                                        <h1>{order.id}</h1>
                                                        <h1>{order.title}</h1>
                                                        <h1>{order.quantity}</h1>
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
