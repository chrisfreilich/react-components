import React from 'react'
import { createPortal } from 'react-dom';

export default function Toast({children, title, position="upper-left", type="neutral"}){
    const className = `toast ${position} ${type}`

    return  createPortal(
        <div className={className}>
            <img className="toast-icon" src={`/${type}.svg`} />
            <h5>{title}</h5>
            <p className="toast-text">{ children }</p>
        </div>,
        document.body
        )        
}