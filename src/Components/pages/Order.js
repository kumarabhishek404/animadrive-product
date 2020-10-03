import React, { useState, useEffect } from 'react'
import './Order.css'
import Button from '../Button'
import data from './Region.json'

function Order() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [countryIndex, setCountryIndex] = useState('')

    const handleSelectedOption = (e) => {
        setCountryIndex(e.target.value)
    }

    return (
        <>
            <div className='order'>
                <div className='order_container'>
                    <h1>Billing Details</h1>
                    <div className='order_container_wrapper'>
                        <div className='order_details_form'>
                            <form>
                                <div className='order_username'>
                                    <input type='text' name='fname' placeholder='First Name' />
                                    <input type='text' name='lname' placeholder='Last Name' />
                                </div>
                                <div className='order_phone'>
                                    <input type='number' placeholder='Phone' />
                                </div>
                                <div className='order_email'>
                                    <input type='email' placeholder='Email' />
                                </div>
                                <div className='order_address'>
                                    <input type='text' placeholder='Address' />
                                </div>
                                <div className='city'>
                                    <input type='text' placeholder='City' />
                                </div>
                                <div className='order_region'>
                                    <input type='number' placeholder='PIN' />
                                    <select placeholder='India' onChange={handleSelectedOption}>
                                        {
                                            data.map((element, index) => {
                                                return <option>{element.country}</option>
                                            })
                                        }
                                    </select>
                                    <select>
                                        {
                                            (countryIndex != null)
                                                ? data.map((element) => {
                                                    return (element.country === countryIndex)
                                                        ? element.states.map(state => <option>{state}</option>)
                                                        : ''
                                                })
                                                : null

                                        }
                                    </select>
                                </div>
                                <div className='additional_info'>
                                    <textarea cols='70' rows='5' placeholder='Additional Information' />
                                </div>
                                <Button>Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='your_order'>
                    <div className='final_order_container'>
                        <h1>Your Order</h1>
                        <div className='your_order_container'>
                            <div className='product_list'>
                                <h3>Products</h3>
                                <p>Mobile x 2</p>
                                <p>Laptop x 2</p>
                            </div>
                            <h4>Subtotal: $23,000</h4>
                            <h3>Total: $34,000</h3>
                        </div>
                    </div>
                    <div className='CCAvenue'>
                        <figure>
                            <img src='https://www.worldofwheelz.in/uploads/media/confirm-cards.png' />
                        </figure>
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href='/'>privacy policy.</a></p>
                        <Button>Proceed to PAY</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order
