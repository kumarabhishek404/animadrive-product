import React, { useState, useEffect } from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import './HomeSection.css'
import ReadMoreReact from 'read-more-react';


function HomeSection({ children, headline, background, detail, image, imageAlter }) {
    const [readMore, setReadMore] = useState(false)

    const listenScrollEvent = () => {
        if (window.screen.availWidth < 690) {
            return setReadMore(true)
        } else {
            return setReadMore(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, [])

    return (
        <div className={background ? 'home_section_white' : 'home_section_green'}>
            <h1>{headline}</h1>
            <div className='home_section_container'>
                <div className={imageAlter ? 'home_section_wrapper alter' : 'home_section_wrapper'} >
                    {image ? <figure>
                        <img src={image} className='home_section_image' alt='images' />
                    </figure>
                        : ''
                    }
                    {
                        !detail ?
                            readMore ? <ReadMoreReact text={children} readMoreText="{click here to read more}" />
                                : <p>{children}</p>
                            : <p>{children}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeSection;
