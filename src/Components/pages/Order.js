import React, { useState, useEffect } from 'react'
import './Order.css'
import Button from '../Button'
import data from './Region.json'
import Axios from 'axios';
import {useLocation} from 'react-router-dom';

function Order() {

    const {pathname} = useLocation()
    console.log(pathname.slice(-1))

    const [form, setForm] = useState({
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        address: '',
        city: '',
        pincode: '',
        country: '',
        state: '',
        additionalInfo: ''
    })

    const handleInputOnchange = (e) => {
        const { name, value } = e.target;

        setForm((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }
    form.product_id=pathname.slice(-1)

    const handleSubmit = () => {
        console.log(form.fname, form.mobile, form.email);
        form.mobile=parseInt(form.mobile)
        form.product_id=parseInt(form.product_id)
        form.pincode=parseInt(form.pincode)
        console.log(form,'form')
        Axios.post("http://localhost:4000/placeOrder/main/order",{form})
        .then(response=>{
            console.log(response)
        })
        .catch(err=> console.log(err))

        setForm({
            fname: '',
            lname: '',
            mobile: '',
            email: '',
            address: '',
            city: '',
            pincode: '',
            country: '',
            state: '',
            additionalInfo: ''
        })
    }


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
                                    <input type='text' name='fname' value={form.fname} onChange={handleInputOnchange} placeholder='First Name' />
                                    <input type='text' name='lname' value={form.lname} onChange={handleInputOnchange} placeholder='Last Name' />
                                </div>
                                <div className='order_phone'>
                                    <input type='number' name='mobile' value={form.mobile} onChange={handleInputOnchange} placeholder='Phone' />
                                </div>
                                <div className='order_email'>
                                    <input type='email' name='email' value={form.email} onChange={handleInputOnchange} placeholder='Email' />
                                </div>
                                <div className='order_address'>
                                    <input type='text' name='address' value={form.address} onChange={handleInputOnchange} placeholder='Address' />
                                </div>
                                <div className='city'>
                                    <input type='text' name='city' value={form.city} onChange={handleInputOnchange} placeholder='City' />
                                </div>
                                <div className='order_region'>
                                    <input type='number' name='pincode' value={form.pincode} onChange={handleInputOnchange} placeholder='PIN' />
                                    <select placeholder='India' name='country' value={form.country} onChange={handleInputOnchange} onChange={handleSelectedOption}>
                                        {
                                            data.map((element, index) => {
                                                return <option>{element.country}</option>
                                            })
                                        }
                                    </select>
                                    <select name='state' value={form.state} onChange={handleInputOnchange} >
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
                                    <textarea cols='70' rows='5' name='additionInfo' value={form.additionalInfo} onChange={handleInputOnchange} placeholder='Additional Information' />
                                </div>
                                <Button onClick={handleSubmit}>Submit</Button>
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
