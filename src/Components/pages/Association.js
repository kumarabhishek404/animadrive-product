import React from 'react'
import './Association.css'

const logos = [
    { image: 'https://images.pexels.com/photos/2835170/pexels-photo-2835170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { image: 'https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { image: 'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { image: 'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
]

function Association({ headline }) {
    return (
        <div className='association'>
            <div className='association_container'>
                <h1>{headline}</h1>
                <div className='association_wrapper'>
                    {
                        logos.map(item =>
                            <figure className='association_container'>
                                <img src={item.image} alt='logo' />
                            </figure>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Association
