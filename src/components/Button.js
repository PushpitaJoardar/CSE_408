import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom';
const STYLES = ['btn--primary','btn--outline'];
const Sizes = ['btn--medium','btn--large'];

export const Button = ({children,type,onClick, buttonStyle,buttonSize})=> {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) 
    ? buttonSize 
    : Sizes[0];

    return (
        <Link to='/products' className='btn-mobile'>
            <button className = {'btn ${checkButtonStyle} ${checkButtonSize}'}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>

    )
}