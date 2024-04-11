import React from 'react'

export default function Banner({children, title="Info", type="neutral"}){
    const className = `banner ${type}`
    return (
        <div className={className}>
            <img className="banner-icon" src={`/${type}.svg`} />
            <h5>{title}</h5>
            <p className="banner-text">{ children }</p>
        </div>
    )
}