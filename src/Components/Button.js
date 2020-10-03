import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';

const styles = ["btn_primary", "btn_outline"]

const sizes = ['btn_size']

function Button({ path, type, onClick, buttonStyle, buttonSize, children }) {
    const checkButtonStyle = styles.includes(buttonStyle)
        ? buttonStyle
        : styles[0]

    // const checkButtonSize = sizes.includes(buttonSize)
    //     ? buttonSize
    //     : sizes[0]

    return (
        <div className='button_container'>
            <Link className='button_link' to={path ? path : '#'} >
                <button
                    className={`btn ${checkButtonStyle} ${sizes}`}
                    onClick={onClick}
                    type={type}>
                    {children}
                </button>
            </Link>
        </div>
    )
}

export default Button