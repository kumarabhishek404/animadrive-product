import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';

const styles = ["btn_primary", "btn_outline"]

const sizes = ['btn_medium', 'btn_large']

function Button({ type, onClick, buttonStyle, buttonSize, children }) {
    const checkButtonStyle = styles.includes(buttonStyle)
        ? buttonStyle
        : styles[0]

    const checkButtonSize = sizes.includes(buttonSize)
        ? buttonSize
        : sizes[0]

    return (
        <div>
            <Link>
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}>
                    {children}
                </button>
            </Link>
        </div>
    )
}

export default Button