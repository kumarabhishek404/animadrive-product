import React, { useState } from 'react'
import './Register.css'
// import { Link } from 'react-router-dom'
import Button from '../Button'

function Colleboration() {

    const [form, setForm] = useState({
        category: '',
        name_of_org: '',
        relate: '',
        name: '',
        mobile: '',
        alternate_mobile: '',
        email: '',
        address: '',
        pin: ''
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

    const handleSubmit = () => {
        console.log(form.name, form.mobile, form.email, form.name_of_org, form.email, form.category);
        setForm({
            category: '',
            name_of_org: '',
            relate: '',
            name: '',
            mobile: '',
            alternate_mobile: '',
            email: '',
            address: '',
            pin: ''
        })
    }

    return (
        <div className='register'>
            <div className='register_form_container'>
                <h1>Colleboration with Us</h1>
                <form className='register_form'>
                    <div className='new_user_role'>
                        <select name='category' value={form.category} onChange={handleInputOnchange}>
                            <option>Corporate</option>
                            <option>Organisation</option>
                        </select>
                    </div>
                    <div className='name_of_org'>
                        <input type='text' for='name' name='name_of_org' value={form.name_of_org} onChange={handleInputOnchange} placeholder='Name of Corporate/Organisation;' />
                    </div>
                    <div className='relate'>
                        <input type='text' for='name' name='relate' value={form.relate} onChange={handleInputOnchange} placeholder='How are you related;' />
                    </div>
                    <div className='name'>
                        <input type='text' for='name' name='name' value={form.name} onChange={handleInputOnchange} placeholder='Name of the Key Contact Person;' />
                    </div>
                    <div className='mobile'>
                        <input type='number' for='mobile' name='mobile' value={form.mobile} onChange={handleInputOnchange} placeholder='Your Mobile;' />
                    </div>
                    <div className='alternate_mobile'>
                        <input type='number' for='mobile' name='alternate_mobile' value={form.alternate_mobile} onChange={handleInputOnchange} placeholder='Your Alternate Mobile;' />
                    </div>
                    <div className='email'>
                        <input type='email' for='email' name='email' value={form.email} onChange={handleInputOnchange} placeholder='Your email;' />
                    </div>
                    <div className='new_user_address'>
                        <input type='text' for='address' name='address' value={form.address} onChange={handleInputOnchange} placeholder='Your Address;' />
                    </div>
                    <div className='pincode'>
                        <input type='number' for='qualification' name='pin' value={form.pin} onChange={handleInputOnchange} placeholder='Your Pincode;' />
                    </div>
                    <Button onClick={handleSubmit}>Colleborate</Button>
                </form>
            </div>
        </div>
    )
}

export default Colleboration;
