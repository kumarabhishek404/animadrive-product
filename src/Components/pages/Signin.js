import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import './Register.css'

function Signin() {
    return (
        <div>
            <div className='register'>
                <div className='register_form_container'>
                    <h1>SignIn Here</h1>
                    <form className='register_form'>
                        <div className='email'>
                            <input type='email' for='email' name='email' placeholder='Your email;' />
                        </div>
                        <div className='password'>
                            <input type='password' for='password' name='password' placeholder='Password:' />
                        </div>
                        <Button>SignIn</Button>
                        <div className='user_already_exist'>
                            <h5>Create an acount</h5>
                            <Link to='/register'>
                                register
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
