import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../Button'
import './Register.css'

function JoinUs() {
    return (
        <div>
            <div className='register'>
                <div className='register_form_container'>
                    <h1>Join Us</h1>
                    <form className='register_form'>
                        <div className='new_user_role'>
                            <select>
                                <option>Intern</option>
                                <option>Volunteer</option>
                                <option>Full-Time</option>
                            </select>
                        </div>
                        <div className='name'>
                            <input type='text' for='name' name='name' placeholder='Your Name;' />
                        </div>
                        <div className='mobile'>
                            <input type='number' for='mobile' name='mobile' placeholder='Your Mobile;' />
                        </div>
                        <div className='email'>
                            <input type='email' for='email' name='email' placeholder='Your email;' />
                        </div>
                        <div className='new_user_address'>
                            <input type='text' for='address' name='address' placeholder='Your Address;' />
                        </div>
                        <div className='qualification'>
                            <input type='email' for='qualification' name='qualification' placeholder='Your Qualification;' />
                        </div>
                        <div className='college'>
                            <input type='text' for='college' name='college' placeholder='Your College;' />
                        </div>
                        <div className='resume'>
                            <input type='text' for='resume' name='resume' placeholder='Your Resume;' />
                        </div>
                        <div className='technical_skills'>
                            <input type='text' for='technical_skills' name='technical_skills' placeholder='Your Technical_skills:' />
                        </div>
                        <div className='join_additional_info'>
                            <textarea type='text' for='additional_info' cols='53' rows="5" name='additional_info' placeholder='Your Additional_info:' />
                        </div>
                        <div className='questions'>
                            <textarea type='text' for='question' cols='53' rows="5" name='question' placeholder='Why do you want to join us?' />
                        </div>
                        <Button>Join us</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JoinUs;
