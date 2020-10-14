import React, { useState } from 'react'
import Button from '../Button'
import { green } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Axios from 'axios';


function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        console.log(name, email, subject, message);
        Axios.post("http://localhost:4000/join/contactUs",{
            name:name,
            email:email,
            subject:subject,
            message:message
        })
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    return (
        <div>
            <div className='register'>
                <div className='details'>
                    <div className='details_container'>
                        <div className='details_heading'>
                            <h1>Contact Details</h1>
                        </div>
                        <div className='details_contact'>
                            <div className='details_box'>
                                <PhoneAndroidIcon style={{ fontSize: 60, color: green[500] }} />
                                <div className='phone'>
                                    <h2>Phone</h2>
                                    <h3>+91-7457876189</h3>
                                </div>
                            </div>
                            <div className='details_box'>
                                <LocationOnIcon style={{ fontSize: 60, color: green[500] }} />
                                <div className='address'>
                                    <h2>Address</h2>
                                    <p>Second Floor, BIMTECH, Plot No.5, Knowledge Park 2 Greater Noida, NCR, Utter Predesh 201306</p>
                                </div>
                            </div>
                            <div className='details_box'>
                                <MailOutlineIcon style={{ fontSize: 60, color: green[500] }} />
                                <div className='email'>
                                    <h2>Email</h2>
                                    <h3>Helloanimadrive@gmail.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='register_form_container'>
                    <h1>Get in touch with us</h1>
                    <form className='register_form'>
                        <div className='username'>
                            <input type='text' for='name' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Username:' />
                        </div>
                        <div className='email'>
                            <input type='email' for='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email;' />
                        </div>
                        <div className='subject'>
                            <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Your subject' />
                        </div>
                        <div className='message'>
                            <textarea type='text' cols='47' rows="8" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your message here' />
                        </div>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
