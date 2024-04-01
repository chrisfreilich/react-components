import React from 'react'

export default function Testimonial({person, children}){

    const imgUrl = `url(${person.image})`

    return (
        <div className="testimonial">
            <div class="testimonial-image" style={{backgroundImage: imgUrl}}></div>
            <div class="color-only"></div>
            <div className="testimonial-text">
                <div className="children">{children}</div>
                <h5>{ person.name }</h5>
                <h6>{ person.title }</h6>
            </div>
        </div>
    )
}