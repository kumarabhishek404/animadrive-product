import React from 'react'
import './HomeSection2.css'

const box_list = [
    { headline: 'Headline_1', image: 'https://images.pexels.com/photos/1576738/pexels-photo-1576738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description: 'The following npm package, @material-ui/icons, includes the 1,100+.' },
    { headline: 'Headline_2', image: 'https://images.pexels.com/photos/1576738/pexels-photo-1576738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description: 'The following npm package, @material-ui/icons, includes the 1,100+.' },
    { headline: 'Headline_3', image: 'https://images.pexels.com/photos/1576738/pexels-photo-1576738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description: 'The following npm package, @material-ui/icons, includes the 1,100+.' }
]

function HomeSection2() {
    return (
        <div className='home_section_2'>
            <div className='home_section2_container'>
                <h1>Impact Created</h1>
                <div className='home_section2_wrapper'>
                    {
                        box_list.map(box =>
                            <div className='single_box'>
                                <figure>
                                    <img src={box.image} />
                                </figure>
                                <div>
                                    <h2>{box.headline}</h2>
                                    <p>{box.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeSection2
