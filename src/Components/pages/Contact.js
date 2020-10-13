import React from 'react'
import Button from '../Button'
import { green } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Contact() {
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
                            <input type='text' for='name' name='name' placeholder='Username:' />
                        </div>
                        <div className='email'>
                            <input type='email' for='email' name='email' placeholder='Your email;' />
                        </div>
                        <div className='subject'>
                            <input type='text' name='subject' placeholder='Your subject' />
                        </div>
                        <div className='message'>
                            <textarea type='text' cols='47' rows="8" placeholder='Your message here' />
                        </div>
                        <Button>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
