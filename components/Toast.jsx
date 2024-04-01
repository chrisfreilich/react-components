import React from 'react'

export default function Toast({children, title, type="neutral"}){
    const className = `toast ${type}`
    return (
        <div className={className}>
            <img className="toast-icon" src={`/${type}.svg`} />
            <h5>{title}</h5>
            <p className="toast-text">{ children }</p>
        </div>
    )
}