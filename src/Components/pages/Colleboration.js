import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import Button from '../Button'

function Colleboration() {
    return (
        <div className='register'>
            <div className='register_form_container'>
                <h1>Colleboration with Us</h1>
                <form className='register_form'>
                    <div className='new_user_role'>
                        <select>
                            <option>Corporate</option>
                            <option>Organisation</option>
                        </select>
                    </div>
                    <div className='name_of_org'>
                        <input type='text' for='name' name='name' placeholder='Name of Corporate/Organisation;' />
                    </div>
                    <div className='relate'>
                        <input type='text' for='name' name='name' placeholder='How are you related;' />
                    </div>
                    <div className='name'>
                        <input type='text' for='name' name='name' placeholder='Name of the Key Contact Person;' />
                    </div>
                    <div className='mobile'>
                        <input type='number' for='mobile' name='mobile' placeholder='Your Mobile;' />
                    </div>
                    <div className='alternate_mobile'>
                        <input type='number' for='mobile' name='mobile' placeholder='Your Alternate Mobile;' />
                    </div>
                    <div className='email'>
                        <input type='email' for='email' name='email' placeholder='Your email;' />
                    </div>
                    <div className='new_user_address'>
                        <input type='text' for='address' name='address' placeholder='Your Address;' />
                    </div>
                    <div className='pincode'>
                        <input type='number' for='qualification' name='qualification' placeholder='Your Pincode;' />
                    </div>
                    <Button>Colleborate</Button>
                </form>
            </div>
        </div>
    )
}

export default Colleboration;
