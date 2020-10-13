import React from 'react'
import './HomeSection.css'


function HomeSection({ children, headline, background, dottedLine }) {
    return (
        <div className={background ? 'home_section_white' : 'home_section_green'}>
            <div className={dottedLine ? 'dotted_line' : ''}></div>
            <h1>{headline}</h1>
            <div className='home_section_container'>
                <div className='home_section_wrapper'>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;
