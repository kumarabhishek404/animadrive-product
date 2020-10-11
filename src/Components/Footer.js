import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import PetIcon from '@material-ui/icons/Pets';
import CopyrightIcon from '@material-ui/icons/Copyright';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div className='footer'>
            <section>
                <div className='logo_container'>
                    <Link to='/' className='logo'>
                        ANIMADRIVE <PetIcon className='petIcon' fontSize="large" />
                    </Link>
                        <div className='websites_rights'>
                        ANIMADRIVE <CopyrightIcon className='copyright' /> 2020
                    </div>
                </div>
            </section>
            <section>
                <div className='contact_container'>
                    <h1>Address</h1>
                    <div className='address'>
                        <LocationOnIcon />
                        <p>Second Floor, BIMTECH, Plot No.5, Knowledge Park 2 Greater Noida, NCR, Utter Predesh 201306
                        </p>
                    </div>
                    <div className='phone'>
                        <PhoneAndroidIcon />
                        <p>+91-7457876189</p>
                    </div>
                    <div className='email'>
                        <MailOutlineIcon />
                        <p>Helloanimadrive@gmail.com</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='about_container'>
                    <div className='about_company'>
                        <h1>About the Company</h1>
                        <p>
                            This plan gives the full contact detail, short depiction similarly as online life catch makes this design completely appropriate. This model has a guide of the association area so it makes simpler for its customer to locate the physical area of the association.
                        </p>
                    </div>
                    <div className='social_links'>
                        <Link className='link_item'>
                            <FacebookIcon />
                        </Link>
                        <Link className='link_item'>
                            <InstagramIcon />
                        </Link>
                        <Link className='link_item'>
                            <LinkedInIcon />
                        </Link>
                        <Link className='link_item'>
                            <TwitterIcon />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
