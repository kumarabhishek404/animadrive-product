import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import Button from '../Button'

function Register() {
    return (
        <div className='register'>
            <div className='register_form_container'>
                <h1>Join Us</h1>
                <form className='register_form'>
                    <div className='username'>
                        <input type='text' for='name' name='name' placeholder='Username:' />
                    </div>
                    <div className='email'>
                        <input type='email' for='email' name='email' placeholder='Your email;' />
                    </div>
                    <div className='mobile_number'>
                        <div className='code'>
                            <input type='text' name='code' placeholder='+91' value='+91' />
                        </div>
                        <div className='phone'>
                            <input type='number' for='phone' name='phone' placeholder='Mobile number:' />
                        </div>
                    </div>
                    <div className='password'>
                        <input type='password' for='password' name='password' placeholder='Password:' />
                    </div>

                    <Button>Join</Button>
                    {/* <div className='user_already_exist'>
                        <h5>Already have an acount</h5>
                        <Link to='/signin'>
                            signin
                        </Link>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Register
